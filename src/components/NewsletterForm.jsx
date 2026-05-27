import { useMemo, useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';

const STORAGE_KEY = 'diestra-newsletter-subs';
const FORMSUBMIT_ENDPOINT = 'https://formsubmit.co/ajax/corporativogpodiestra@gmail.com';

function persistLocal(payload) {
  const list = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  list.push({ ...payload, fecha: new Date().toISOString() });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

async function sendToInbox(payload) {
  const res = await fetch(FORMSUBMIT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      nombre: payload.nombre,
      email: payload.email,
      ciudad: payload.ciudad || '(sin preferencia)',
      fecha: new Date().toISOString(),
      _subject: `Nueva suscripción newsletter — ${payload.nombre}`,
      _template: 'table',
      _captcha: 'false',
    }),
  });
  if (!res.ok) throw new Error(`FormSubmit respondió ${res.status}`);
  const data = await res.json();
  if (data.success === 'false' || data.success === false) {
    throw new Error(data.message || 'Envío rechazado por FormSubmit');
  }
}

export default function NewsletterForm({ compact = false }) {
  const { t } = useTranslation();
  const { hoteles } = useHotels();
  const ubicacionesUnicas = useMemo(
    () =>
      Array.from(new Set(hoteles.map((h) => `${h.ciudad}, ${h.estado}`))).sort((a, b) =>
        a.localeCompare(b, 'es')
      ),
    [hoteles]
  );
  const [form, setForm] = useState({ nombre: '', email: '', ciudad: '', acepta: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);

  const update = (field) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!form.nombre.trim() || !form.email.trim()) {
      setError(t('newsletter.errors.faltantes'));
      return;
    }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError(t('newsletter.errors.email'));
      return;
    }
    if (!form.acepta) {
      setError(t('newsletter.errors.consentimiento'));
      return;
    }
    setSending(true);
    try {
      await sendToInbox(form);
      persistLocal(form);
      setSubmitted(true);
    } catch (err) {
      console.error('[newsletter] envío fallido', err);
      setError(t('newsletter.errors.envio'));
    } finally {
      setSending(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 md:p-6 text-center">
        <CheckCircle2 className="mx-auto text-emerald-600 mb-2" size={32} />
        <h3 className="font-bold text-emerald-900 text-base md:text-lg">
          {t('newsletter.success.title')}
        </h3>
        <p className="text-sm text-emerald-800 mt-1">{t('newsletter.success.body')}</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-gray-200 rounded-2xl shadow-sm ${
        compact ? 'p-4 md:p-5' : 'p-5 md:p-8'
      } space-y-4`}
    >
      <div className="flex items-start gap-3">
        <div className="bg-blue-50 text-blue-600 p-2 rounded-xl flex-shrink-0">
          <Mail size={20} />
        </div>
        <div>
          <h3 className="font-extrabold text-gray-900 text-base md:text-lg leading-tight">
            {t('newsletter.title')}
          </h3>
          <p className="text-xs md:text-sm text-gray-500 mt-1">{t('newsletter.subtitle')}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <label className="block">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
            {t('newsletter.fields.nombre')}
          </span>
          <input
            type="text"
            value={form.nombre}
            onChange={update('nombre')}
            className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            required
          />
        </label>
        <label className="block">
          <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
            {t('newsletter.fields.email')}
          </span>
          <input
            type="email"
            value={form.email}
            onChange={update('email')}
            className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            required
          />
        </label>
      </div>

      <label className="block">
        <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
          {t('newsletter.fields.ciudad')}
        </span>
        <select
          value={form.ciudad}
          onChange={update('ciudad')}
          className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-blue-500"
        >
          <option value="">{t('newsletter.fields.ciudadAny')}</option>
          {ubicacionesUnicas.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-start gap-2 text-xs text-gray-600 cursor-pointer">
        <input
          type="checkbox"
          checked={form.acepta}
          onChange={update('acepta')}
          className="mt-0.5 accent-blue-600"
        />
        <span>{t('newsletter.consentimiento')}</span>
      </label>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-sm transition-colors uppercase tracking-wider text-sm"
      >
        {sending ? t('newsletter.sending') : t('newsletter.submit')}
      </button>
    </form>
  );
}
