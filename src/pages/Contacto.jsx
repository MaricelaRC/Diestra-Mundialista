import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import NewsletterForm from '../components/NewsletterForm.jsx';

export default function Contacto() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <div className="max-w-md md:max-w-3xl mx-auto bg-white shadow-2xl border-x border-gray-200 min-h-screen p-4 md:p-8 space-y-5">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600"
        >
          <ArrowLeft size={16} /> {t('contacto.volver')}
        </Link>

        <div className="space-y-1">
          <h1 className="font-black text-2xl md:text-3xl text-gray-900 tracking-tight">
            {t('contacto.title')}
          </h1>
          <p className="text-sm md:text-base text-gray-500">{t('contacto.subtitle')}</p>
        </div>

        <NewsletterForm />
      </div>
    </div>
  );
}
