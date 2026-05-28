// Aviso de privacidad simplificado. Cumple con los requisitos mínimos de la
// LFPDPPP (responsable, datos recabados, finalidades, transferencias, ARCO,
// cambios al aviso). Si Grupo Diestra requiere ajustes legales adicionales
// (domicilio fiscal completo, INAI, etc.), se editan vía locales.

import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const SECCIONES = [
  'responsable',
  'datos',
  'finalidades',
  'transferencias',
  'derechos',
  'cambios'
];

export default function Privacidad() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen text-gray-900 font-sans px-2 md:px-0">
      <div className="max-w-md md:max-w-3xl mx-auto bg-white/85 md:bg-white backdrop-blur-md shadow-2xl border-x border-gray-200 min-h-screen p-4 md:p-8 space-y-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft size={16} /> {t('privacidad.volver')}
        </Link>

        <header className="space-y-1">
          <h1 className="font-black text-2xl md:text-3xl text-gray-900 tracking-tight">
            {t('privacidad.title')}
          </h1>
          <p className="text-xs md:text-sm text-gray-500">{t('privacidad.updated')}</p>
        </header>

        <div className="space-y-6">
          {SECCIONES.map((id) => (
            <section key={id} className="space-y-2">
              <h2 className="font-bold text-gray-900 text-base md:text-lg">
                {t(`privacidad.secciones.${id}.title`)}
              </h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {t(`privacidad.secciones.${id}.body`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
