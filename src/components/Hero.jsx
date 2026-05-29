// Hero principal de la home. Reemplaza el MundialCountdown bar y la intro
// de Gastronomia: visualmente mas potente, condensa el countdown animado,
// titulo, subtitulo y CTA principal en un solo bloque. Fondo construido por
// capas (gradiente base + orbes blur + lineas de campo) para feel de "campo
// nocturno bajo luces" sin necesitar foto.

import { useEffect, useState } from 'react';
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
        {/* Stack: ghost "88" atras (segmentos apagados) + digito real al frente. */}
        <div className="relative leading-none">
          <span
            aria-hidden="true"
            className="block text-3xl md:text-5xl font-scoreboard-ghost tabular-nums leading-none"
          >
            88
          </span>
          <span
            key={padded}
            className="absolute inset-0 text-3xl md:text-5xl font-scoreboard tabular-nums leading-none animate-in fade-in duration-200"
          >
            {padded}
          </span>
        </div>
      </div>
      <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold opacity-80 mt-2">
        {label}
      </span>
    </div>
  );
}

function Sep() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-10 md:h-14 flex items-center">
        <span className="text-3xl md:text-5xl font-scoreboard leading-none -mt-2">:</span>
      </div>
      <span aria-hidden="true" className="text-[9px] md:text-[10px] opacity-0 mt-2 select-none">
        .
      </span>
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const past = now > MUNDIAL_END;
  const enCurso = now >= MUNDIAL_START && now <= MUNDIAL_END;
  const target = enCurso ? MUNDIAL_END : MUNDIAL_START;
  const time = past ? null : timeUntil(target, now);

  return (
    <section className="relative overflow-hidden rounded-2xl shadow-2xl text-white">
      {/* Capa base: gradiente verde profundo evocando campo nocturno. */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-950"
        aria-hidden="true"
      />

      {/* Orbes blurry simulando luces de estadio. */}
      <div
        className="absolute -top-24 -right-20 w-72 h-72 bg-amber-400/35 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-16 w-72 h-72 bg-red-500/25 rounded-full blur-3xl"
        aria-hidden="true"
      />

      {/* Lineas verticales sutiles de campo. */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent 0, transparent 38px, white 38px, white 40px)'
        }}
      />

      <div className="relative p-6 md:p-10 flex flex-col items-center justify-center text-center gap-5 md:gap-6 min-h-[360px] md:min-h-[400px]">
        <div className="space-y-3 md:space-y-4 max-w-2xl md:max-w-4xl">
          <h2 className="font-bold text-3xl md:text-4xl leading-[1.05] tracking-tight drop-shadow-lg">
            {t('hero.title')}
          </h2>

          <p className="text-sm md:text-lg opacity-90 leading-relaxed max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>

        {time && (
          <div
            className="inline-flex items-start gap-2 md:gap-4 bg-black/75 rounded-xl px-5 py-4 md:px-7 md:py-5 border-2 border-black/60"
            style={{ boxShadow: 'inset 0 0 24px rgba(0,0,0,0.6), 0 4px 14px rgba(0,0,0,0.4)' }}
          >
            <Unit value={time.dias} label={t('countdown.units.dias')} />
            <Sep />
            <Unit value={time.horas} label={t('countdown.units.horas')} />
            <Sep />
            <Unit value={time.minutos} label={t('countdown.units.minutos')} />
            <Sep />
            <Unit value={time.segundos} label={t('countdown.units.segundos')} />
          </div>
        )}
      </div>
    </section>
  );
}
