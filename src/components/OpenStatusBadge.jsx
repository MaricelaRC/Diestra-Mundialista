import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { computeOpenStatus } from '../lib/horarios.js';

export default function OpenStatusBadge({ horarios, size = 'sm', className = '' }) {
  const { t } = useTranslation();
  const [now, setNow] = useState(() => new Date());

  // Re-evalúa cada minuto mientras el componente está montado
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);

  const status = computeOpenStatus(horarios, now);
  if (!status) return null;

  const sizing =
    size === 'lg'
      ? 'text-[11px] md:text-xs px-2.5 py-1 gap-2'
      : 'text-[9px] md:text-[10px] px-2 py-0.5 gap-1.5';
  const dotSize = size === 'lg' ? 'w-1.5 h-1.5' : 'w-1.5 h-1.5';

  if (status.open) {
    return (
      <span
        className={`inline-flex items-center font-bold uppercase tracking-widest rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 ${sizing} ${className}`}
      >
        <span className={`relative flex ${dotSize}`} aria-hidden="true">
          <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
          <span className={`relative inline-flex rounded-full ${dotSize} bg-emerald-500`} />
        </span>
        <span>{t('horarios.abierto')}</span>
        {status.until && (
          <span className="font-semibold normal-case tracking-normal opacity-80">
            · {t('horarios.cierra', { time: status.until })}
          </span>
        )}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center font-bold uppercase tracking-widest rounded-full bg-gray-100 text-gray-500 border border-gray-200 ${sizing} ${className}`}
    >
      <span className={`${dotSize} rounded-full bg-gray-400`} aria-hidden="true" />
      <span>{t('horarios.cerrado')}</span>
      {status.next && (
        <span className="font-semibold normal-case tracking-normal opacity-80">
          · {t('horarios.abre', { time: status.next })}
        </span>
      )}
    </span>
  );
}
