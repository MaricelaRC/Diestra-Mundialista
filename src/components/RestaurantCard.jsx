import { Clock, Flame, Phone, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import OpenStatusBadge from './OpenStatusBadge.jsx';
import { formatPhone, buildTelHref } from '../lib/phone.js';
import { useTr } from '../lib/i18nData.js';

export default function RestaurantCard({ restaurante }) {
  const { t, i18n } = useTranslation();
  const { tr } = useTr();
  const locale = i18n.language?.startsWith('en') ? 'en-US' : 'es-MX';
  const tienePromo = Boolean(restaurante.porcentaje);

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/30 p-3 space-y-3 shadow-sm">
      {restaurante.portada && (
        <div className="w-full h-32 md:h-40 rounded-lg overflow-hidden relative border border-gray-100 shadow-sm bg-gray-100">
          <img
            src={restaurante.portada}
            alt={restaurante.nombreCentroConsumo}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          {tienePromo && (
            <span className="absolute top-2 right-2 bg-red-600 text-white font-black text-xs px-2.5 py-1 rounded-full shadow-md">
              {restaurante.porcentaje} {t('alimentos.off')}
            </span>
          )}
        </div>
      )}

      <div className="space-y-1.5">
        <div className="flex justify-between items-start gap-2">
          <h5 className="font-extrabold text-blue-950 text-sm leading-tight">
            {restaurante.nombreCentroConsumo}
          </h5>
          {tienePromo && restaurante.fechaHorarioPublicacion && (
            <span className="text-[9px] text-gray-400 font-mono flex items-center gap-1 bg-white px-2 py-0.5 rounded-full border border-gray-200 whitespace-nowrap">
              <Clock size={10} /> {t('alimentos.publicacion')}:{' '}
              {new Date(restaurante.fechaHorarioPublicacion).toLocaleDateString(locale)}
            </span>
          )}
        </div>
        {restaurante.tipoCocina && (
          <p className="inline-flex items-center gap-1 text-[10px] text-gray-500 font-semibold bg-gray-100 px-2 py-0.5 rounded-full">
            <UtensilsCrossed size={10} /> {tr(restaurante.tipoCocina)}
          </p>
        )}
        {tienePromo && (
          <p className="text-xs font-black text-blue-600 leading-snug">
            {tr(restaurante.nombrePromocion)}
          </p>
        )}
      </div>

      {tienePromo ? (
        <div className="bg-amber-50/50 border border-amber-200/60 p-2.5 rounded-lg space-y-1">
          <p className="text-[9px] font-black text-amber-800 uppercase tracking-tight flex items-center gap-1">
            <Flame size={12} className="text-amber-600" /> {tr(restaurante.descuento)}
          </p>
          <p className="text-[11px] text-gray-600 font-medium leading-normal">
            {tr(restaurante.descripcionPromo)}
          </p>
        </div>
      ) : (
        restaurante.descripcionRestaurante && (
          <p className="text-[11px] text-gray-600 font-medium leading-normal">
            {tr(restaurante.descripcionRestaurante)}
          </p>
        )
      )}

      {restaurante.horarios?.length > 0 && (
        <div className="bg-white border border-gray-100 rounded-lg p-2.5 space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[9px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1">
              <Clock size={10} /> {t('alimentos.horarios')}
            </p>
            <OpenStatusBadge horarios={restaurante.horarios} />
          </div>
          <dl className="space-y-0.5">
            {restaurante.horarios.map((h, i) => (
              <div
                key={i}
                className="flex justify-between items-baseline gap-2 text-[11px]"
              >
                <dt className="text-gray-500 truncate">{tr(h.servicio)}</dt>
                <dd className="font-bold text-gray-800 tabular-nums whitespace-nowrap">
                  {h.horario}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      )}

      {restaurante.contacto && (
        <div className="pt-1">
          <a
            href={buildTelHref(restaurante.contacto, restaurante.extension)}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-colors uppercase tracking-wider"
          >
            <Phone size={12} /> {t('alimentos.llamar')} {formatPhone(restaurante.contacto)}
            {restaurante.extension ? ` · ${t('alimentos.ext')} ${restaurante.extension}` : ''}
          </a>
        </div>
      )}
    </div>
  );
}
