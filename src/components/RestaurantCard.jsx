// Card de centro de consumo (info base solamente). Si el centro tiene
// 1+ promos, muestra un pill rojo "Promos disponibles" sobre la portada;
// los detalles de cada promo viven en su propia card en la sección
// "Promociones" del hotel, no aquí.

import { Clock, Phone, Sparkles, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import OpenStatusBadge from './OpenStatusBadge.jsx';
import { formatPhone, buildTelHref } from '../lib/phone.js';
import { useTr } from '../lib/i18nData.js';
import PromoImage from './PromoImage.jsx';

export default function RestaurantCard({ restaurante }) {
  const { t } = useTranslation();
  const { tr } = useTr();
  const tienePromos = (restaurante.promos || []).length > 0;

  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/30 p-3 space-y-3 shadow-sm">
      {restaurante.portada && (
        <PromoImage
          src={restaurante.portada}
          alt={restaurante.nombreCentroConsumo}
          className="w-full h-32 md:h-40 rounded-lg border border-gray-100 shadow-sm"
        >
          {tienePromos && (
            <span className="absolute top-2 right-2 bg-red-600 text-white font-black text-[10px] md:text-xs px-2.5 py-1 rounded-full shadow-md z-20 inline-flex items-center gap-1 uppercase tracking-wide">
              <Sparkles size={11} /> {t('alimentos.promosDisponibles')}
            </span>
          )}
        </PromoImage>
      )}

      <div className="space-y-1.5">
        <h5 className="font-extrabold text-blue-950 text-sm leading-tight">
          {restaurante.nombreCentroConsumo}
        </h5>
        {restaurante.tipoCocina && (
          <p className="inline-flex items-center gap-1 text-[10px] text-gray-500 font-semibold bg-gray-100 px-2 py-0.5 rounded-full">
            <UtensilsCrossed size={10} /> {tr(restaurante.tipoCocina)}
          </p>
        )}
      </div>

      {restaurante.descripcionRestaurante && (
        <p className="text-[11px] text-gray-600 font-medium leading-normal">
          {tr(restaurante.descripcionRestaurante)}
        </p>
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
