// Detalle de un centro de consumo dentro de un hotel: info base del centro
// arriba (cocina, horarios, descripción, contacto) y debajo el listado de
// todas sus promociones. Cada promo es un link a /promo/:hotelId/:promoId.

import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Clock,
  ExternalLink,
  MapPin,
  Phone,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';
import { formatPhone, buildTelHref } from '../lib/phone.js';
import { findCentroIdxBySlug } from '../lib/slug.js';
import OpenStatusBadge from '../components/OpenStatusBadge.jsx';
import PromoImage from '../components/PromoImage.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';
import { useTr } from '../lib/i18nData.js';

export default function CentroDetail() {
  const { t } = useTranslation();
  const { tr, trArray } = useTr();
  const { hotelId, centroSlug: slug } = useParams();
  const { hoteles, loading } = useHotels();
  const hotel = hoteles.find((h) => h.id === hotelId);
  const idx = hotel ? findCentroIdxBySlug(hotel.restaurantes, slug) : -1;
  const rest = idx >= 0 ? hotel.restaurantes[idx] : null;

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!hotel || !rest) return <NotFound />;

  const promos = rest.promos || [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen">
        <div className="sticky top-0 z-30 flex items-center justify-between p-3 md:p-4 pointer-events-none">
          <Link
            to={`/hotel/${hotel.id}`}
            className="pointer-events-auto bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
            aria-label={t('a11y.back')}
          >
            <ArrowLeft size={18} />
          </Link>
        </div>

        {rest.portada && (
          <div className="-mt-12 md:-mt-14 bg-gray-100">
            <img
              src={rest.portada}
              alt={rest.nombreCentroConsumo}
              className="w-full h-auto block max-h-[60vh] object-cover"
            />
          </div>
        )}

        <section className="p-4 md:p-6 lg:p-8 space-y-5">
          <header className="space-y-1">
            <p className="text-[11px] md:text-sm uppercase tracking-widest text-gray-500 font-semibold">
              {hotel.name}
            </p>
            <h1 className="font-black text-2xl md:text-4xl tracking-tight text-gray-900 leading-tight">
              {rest.nombreCentroConsumo}
            </h1>
            <p className="text-sm md:text-base text-gray-600 flex items-center gap-1.5">
              <MapPin size={14} /> {hotel.ciudad}{hotel.zona ? ` · ${hotel.zona}` : ''}, {hotel.estado}
            </p>
          </header>

          {rest.tipoCocina && (
            <p className="inline-flex items-center gap-1.5 text-xs md:text-sm text-blue-700 font-semibold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
              <UtensilsCrossed size={14} /> {tr(rest.tipoCocina)}
            </p>
          )}

          {rest.descripcionRestaurante && (
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              {tr(rest.descripcionRestaurante)}
            </p>
          )}

          {trArray(rest.especialidades).length > 0 && (
            <div className="space-y-2">
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                <Sparkles size={12} /> {t('promo.detalle.especialidades')}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {trArray(rest.especialidades).map((esp, i) => (
                  <span
                    key={i}
                    className="text-xs md:text-sm bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full"
                  >
                    {esp}
                  </span>
                ))}
              </div>
            </div>
          )}

          {rest.horarios?.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                  <Clock size={12} /> {t('promo.detalle.horarios')}
                </p>
                <OpenStatusBadge horarios={rest.horarios} />
              </div>
              <dl className="border border-gray-100 rounded-xl overflow-hidden divide-y divide-gray-100">
                {rest.horarios.map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center gap-3 px-3 py-2.5 md:px-4 bg-gray-50/40"
                  >
                    <dt className="text-sm text-gray-600 font-medium">{tr(h.servicio)}</dt>
                    <dd className="text-sm font-bold text-gray-900 tabular-nums whitespace-nowrap">
                      {h.horario}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {rest.web && (
            <a
              href={rest.web}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-700 font-semibold"
            >
              {t('promo.detalle.sitioOficial')} <ExternalLink size={14} />
            </a>
          )}

          {rest.contacto && (
            <a
              href={buildTelHref(rest.contacto, rest.extension)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors uppercase tracking-wider text-sm"
            >
              <Phone size={14} /> {t('alimentos.llamar')} {formatPhone(rest.contacto)}
              {rest.extension ? ` · ${t('alimentos.ext')} ${rest.extension}` : ''}
            </a>
          )}

          <div className="pt-2 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-bold text-gray-900 text-base md:text-lg">
                {t('centro.promociones')}
              </h2>
              {promos.length > 0 && (
                <span className="text-[11px] bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-full font-bold">
                  {t('centro.promosCount', { count: promos.length })}
                </span>
              )}
            </div>

            {promos.length === 0 ? (
              <p className="text-sm text-gray-500 italic">{t('centro.sinPromos')}</p>
            ) : (
              <ul className="space-y-3">
                {promos.map((promo) => {
                  const portada = promo.portada || rest.portada;
                  return (
                    <li key={promo.id}>
                      <Link
                        to={`/promo/${hotel.id}/${promo.id}`}
                        className="flex items-stretch gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md rounded-xl overflow-hidden transition-all"
                      >
                        {portada && (
                          <PromoImage
                            src={portada}
                            alt={tr(promo.nombrePromocion)}
                            className="w-24 md:w-32 flex-shrink-0"
                          />
                        )}
                        <div className="flex-1 min-w-0 p-3 md:p-4 flex flex-col justify-between gap-2">
                          <div className="min-w-0">
                            <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight truncate">
                              {tr(promo.nombrePromocion)}
                            </h3>
                            {tr(promo.descripcionPromo) && (
                              <p className="text-xs md:text-sm text-gray-500 line-clamp-2 mt-1">
                                {tr(promo.descripcionPromo)}
                              </p>
                            )}
                          </div>
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            {promo.porcentaje && (
                              <span className="inline-flex items-center bg-red-600 text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded-full shadow-sm tracking-wide">
                                {promo.porcentaje}
                              </span>
                            )}
                            <span className="text-xs text-blue-600 font-bold inline-flex items-center gap-1">
                              {t('alimentos.verDetalle')} <ArrowRight size={12} />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
