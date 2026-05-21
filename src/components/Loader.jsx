import { Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Loader() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center py-20 text-gray-400">
      <Loader2 className="animate-spin mb-3" />
      <p className="text-xs font-medium">{t('loading')}</p>
    </div>
  );
}
