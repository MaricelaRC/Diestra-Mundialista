// Detalle de una promoción específica. Se ubica vía /promo/:hotelId/:promoId
// — buscamos la promo dentro de hoteles[].restaurantes[].promos[] por id.
// La promo conoce su centro (parent), por eso mostramos info de centro debajo.

import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  ExternalLink,
  Flame,
  MapPin,
  Phone,
  Share2,
  Sparkles,
  UtensilsCrossed
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';
import { formatPhone, buildTelHref } from '../lib/phone.js';
import OpenStatusBadge from '../components/OpenStatusBadge.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';
import { useTr } from '../lib/i18nData.js';

// Busca la promo dentro del hotel y devuelve también el centro al que pertenece.
function findPromo(hotel, promoId) {
  if (!hotel) return null;
  for (const rest of hotel.restaurantes || []) {
    for (const promo of rest.promos || []) {
      if (promo.id === promoId) return { rest, promo };
    }
  }
  return null;
}

export default function PromoDetail() {
  const { t, i18n } = useTranslation();
  const { tr, trArray } = useTr();
  const { hotelId, promoId } = useParams();
  const { hoteles, loading } = useHotels();
  const hotel = hoteles.find((h) => h.id === hotelId);
  const found = findPromo(hotel, promoId);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!hotel || !found) return <NotFound />;

  const { rest, promo } = found;
  const locale = i18n.language?.startsWith('en') ? 'en-US' : 'es-MX';
  const hasPromo = Boolean(promo.porcentaje);
  // Si la promo no tiene su portada vertical aún, mostramos la del centro
  // (definida por Diestra) para no dejar el hero vacío.
  const portada = promo.portada || rest.portada;
  const hasRestaurantInfo =
    rest.descripcionRestaurante ||
    rest.tipoCocina ||
    (rest.horarios && rest.horarios.length > 0) ||
    (rest.especialidades && rest.especialidades.length > 0) ||
    rest.web;

  const handleShare = async () => {
    const shareData = {
      title: `${tr(promo.nombrePromocion) || rest.nombreCentroConsumo} · ${hotel.name}`,
      text: tr(promo.descripcionPromo) || tr(rest.descripcionRestaurante) || '',
      url: window.location.href
    };
    try {
      if (navigator.share) await navigator.share(shareData);
      else await navigator.clipboard.writeText(shareData.url);
    } catch {
      /* canceled */
    }
  };

  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen">
        {/* Botones flotantes sobre la imagen — no la cubren porque van fixed/absolute en la esquina. */}
        <div className="sticky top-0 z-30 flex items-center justify-between p-3 md:p-4 pointer-events-none">
          <Link
            to={`/hotel/${hotel.id}`}
            className="pointer-events-auto bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
            aria-label={t('a11y.back')}
          >
            <ArrowLeft size={18} />
          </Link>
          <button
            type="button"
            onClick={handleShare}
            className="pointer-events-auto bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
            aria-label={t('a11y.share')}
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Imagen en su aspect ratio natural — sin recortes, sin overlays. Es la
            hero principal y el flyer suele traer su propia info gráfica. */}
        {portada && (
          <div className="-mt-12 md:-mt-14 bg-gray-100">
            <img
              src={portada}
              alt={tr(promo.nombrePromocion) || rest.nombreCentroConsumo}
              className="w-full h-auto block"
            />
          </div>
        )}

        <section className="p-4 md:p-6 lg:p-8 space-y-5">
          {/* 1. Título (con hotel como kicker pequeño arriba) */}
          <header className="space-y-1">
            <p className="text-[11px] md:text-sm uppercase tracking-widest text-gray-500 font-semibold">
              {hotel.name}
            </p>
            <h1 className="font-black text-2xl md:text-4xl tracking-tight text-gray-900 leading-tight">
              {tr(promo.nombrePromocion) || rest.nombreCentroConsumo}
            </h1>
          </header>

          {/* 2. Píldora roja */}
          {hasPromo && (
            <div>
              <span className="inline-flex items-center bg-red-600 text-white font-black text-sm md:text-base px-3 py-1 rounded-full shadow-md">
                {promo.porcentaje}
              </span>
            </div>
          )}

          {/* 3. Descripción de la promo */}
          {hasPromo && (tr(promo.descuento) || tr(promo.descripcionPromo)) && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-5 space-y-2">
              {tr(promo.descuento) && (
                <p className="text-xs md:text-sm font-black text-amber-800 uppercase tracking-tight flex items-center gap-2">
                  <Flame size={16} className="text-amber-600" /> {tr(promo.descuento)}
                </p>
              )}
              {tr(promo.descripcionPromo) && (
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {tr(promo.descripcionPromo)}
                </p>
              )}
            </div>
          )}

          {/* 4. Lugar */}
          <p className="text-sm md:text-base text-gray-600 flex items-center gap-1.5">
            <MapPin size={14} /> {rest.nombreCentroConsumo} · {hotel.ciudad}{hotel.zona ? ` · ${hotel.zona}` : ''}, {hotel.estado}
          </p>

          {/* 5. Horarios (estado de apertura + fecha de publicación) */}
          {(rest.horarios?.length > 0 || (hasPromo && promo.fechaHorarioPublicacion)) && (
            <div className="flex items-center flex-wrap gap-3">
              {rest.horarios?.length > 0 && (
                <OpenStatusBadge horarios={rest.horarios} size="lg" />
              )}
              {hasPromo && promo.fechaHorarioPublicacion && (
                <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5">
                  <Clock size={14} />
                  {t('alimentos.publicacion')}:{' '}
                  {new Date(promo.fechaHorarioPublicacion).toLocaleDateString(locale)}
                </span>
              )}
            </div>
          )}

          {hasRestaurantInfo && (
            <div className="border border-gray-200 rounded-2xl p-4 md:p-5 space-y-4 bg-white">
              <h2 className="font-bold text-gray-900 text-base md:text-lg">
                {t('promo.detalle.sobre')}
              </h2>

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
            </div>
          )}

          <div className="pt-2">
            <a
              href={buildTelHref(rest.contacto, rest.extension)}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors uppercase tracking-wider text-sm"
            >
              <Phone size={14} /> {t('alimentos.llamar')} {formatPhone(rest.contacto)}
              {rest.extension ? ` · ${t('alimentos.ext')} ${rest.extension}` : ''}
            </a>
          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            className="block text-center text-sm text-blue-600 hover:text-blue-700 font-semibold pt-2"
          >
            {t('promo.verHotel', { name: hotel.name })} →
          </Link>
        </section>
      </div>
    </div>
  );
}
