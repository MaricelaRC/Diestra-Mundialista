// Countdown estilo reloj: Días : Horas : Minutos : Segundos. Cada dígito
// usa `key` con el valor — al cambiar, React monta un elemento nuevo y
// tailwindcss-animate corre el slide-in. Tick cada segundo via setInterval.

import { useEffect, useState } from 'react';
import { Trophy } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MUNDIAL_START = new Date('2026-06-11T00:00:00');
const MUNDIAL_END = new Date('2026-07-19T23:59:59');

function timeUntil(target, now) {
  const ms = Math.max(0, target.getTime() - now.getTime());
  return {
    dias: Math.floor(ms / 86_400_000),
    horas: Math.floor((ms % 86_400_000) / 3_600_000),
    minutos: Math.floor((ms % 3_600_000) / 60_000),
    segundos: Math.floor((ms % 60_000) / 1_000)
  };
}

function Unit({ value, label }) {
  const padded = String(value).padStart(2, '0');
  return (
    <div className="flex flex-col items-center">
      <div className="h-10 md:h-14 flex items-center justify-center overflow-hidden">
        <span
          key={padded}
          className="block text-3xl md:text-5xl font-black tabular-nums leading-none animate-in fade-in slide-in-from-top-3 duration-500"
        >
          {padded}
        </span>
      </div>
      <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-85 mt-1.5">
        {label}
      </span>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-10 md:h-14 flex items-center">
        <span className="text-2xl md:text-4xl font-black opacity-60 leading-none">:</span>
      </div>
      <span aria-hidden="true" className="text-[9px] md:text-[10px] opacity-0 mt-1.5 select-none">
        .
      </span>
    </div>
  );
}

export default function MundialCountdown() {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (now > MUNDIAL_END) return null;
  const enCurso = now >= MUNDIAL_START && now <= MUNDIAL_END;
  const target = enCurso ? MUNDIAL_END : MUNDIAL_START;
  const time = timeUntil(target, now);

  return (
    <div className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white rounded-2xl shadow-md p-4 md:p-5">
      <div className="flex items-center justify-center gap-2 mb-3">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5 flex-shrink-0">
          <Trophy size={14} />
        </div>
        <p className="text-[10px] md:text-xs uppercase tracking-wider font-bold opacity-90 text-center">
          {enCurso ? t('countdown.tituloFin') : t('countdown.tituloInicio')}
        </p>
      </div>

      <div className="flex items-start justify-center gap-1.5 md:gap-3">
        <Unit value={time.dias} label={t('countdown.units.dias')} />
        <Colon />
        <Unit value={time.horas} label={t('countdown.units.horas')} />
        <Colon />
        <Unit value={time.minutos} label={t('countdown.units.minutos')} />
        <Colon />
        <Unit value={time.segundos} label={t('countdown.units.segundos')} />
      </div>
    </div>
  );
}
