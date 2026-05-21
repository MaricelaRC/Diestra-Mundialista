import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <p className="text-6xl">⚽</p>
        <h1 className="text-2xl font-bold text-gray-900">{t('notFound.title')}</h1>
        <p className="text-sm text-gray-500">{t('notFound.body')}</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors text-sm font-semibold text-white"
        >
          {t('notFound.cta')}
        </Link>
      </div>
    </div>
  );
}
