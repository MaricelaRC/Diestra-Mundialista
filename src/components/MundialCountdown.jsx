import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MUNDIAL_START = new Date('2026-06-11T00:00:00');
const MUNDIAL_END = new Date('2026-07-19T23:59:59');

function daysBetween(from, to) {
  const ms = to.getTime() - from.getTime();
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export default function MundialCountdown() {
  const { t } = useTranslation();
  const now = new Date();

  if (now > MUNDIAL_END) return null;

  const enCurso = now >= MUNDIAL_START && now <= MUNDIAL_END;
  const dias = enCurso ? daysBetween(now, MUNDIAL_END) : daysBetween(now, MUNDIAL_START);

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white rounded-2xl shadow-md px-4 py-3 md:px-5 md:py-3.5 flex items-center gap-3">
      <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 flex-shrink-0">
        <Trophy size={18} className="md:w-5 md:h-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] md:text-xs uppercase tracking-wider opacity-90 font-bold">
          {enCurso ? t('countdown.enCurso') : t('countdown.faltan')}
        </p>
        <p className="text-sm md:text-base font-black leading-tight">
          {dias === 1
            ? t('countdown.uno', { contexto: enCurso ? t('countdown.contextoFin') : t('countdown.contextoInicio') })
            : t('countdown.muchos', { dias, contexto: enCurso ? t('countdown.contextoFin') : t('countdown.contextoInicio') })}
        </p>
      </div>
    </div>
  );
}
