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
import PromoImage from '../components/PromoImage.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';
import { useTr } from '../lib/i18nData.js';

export default function PromoDetail() {
  const { t, i18n } = useTranslation();
  const { tr, trArray } = useTr();
  const { hotelId, idx } = useParams();
  const { hoteles, loading } = useHotels();
  const hotel = hoteles.find((h) => h.id === hotelId);
  const restIdx = Number(idx);
  const rest = hotel?.restaurantes?.[restIdx];

  // Espera el primer snapshot de Firestore antes de pintar — si no, mostraríamos
  // los valores del fallback estático y luego saltarían a los reales.
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!hotel || !rest) return <NotFound />;

  const locale = i18n.language?.startsWith('en') ? 'en-US' : 'es-MX';
  const hasPromo = Boolean(rest.porcentaje);
  const hasRestaurantInfo =
    rest.descripcionRestaurante ||
    rest.tipoCocina ||
    (rest.horarios && rest.horarios.length > 0) ||
    (rest.especialidades && rest.especialidades.length > 0) ||
    rest.web;

  const handleShare = async () => {
    const shareData = {
      title: `${tr(rest.nombrePromocion) || rest.nombreCentroConsumo} · ${hotel.name}`,
      text: tr(rest.descripcionPromo) || tr(rest.descripcionRestaurante) || '',
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
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen">
        <div className="relative">
          {rest.portada && (
            <PromoImage
              src={rest.portada}
              alt={rest.nombreCentroConsumo}
              className="w-full h-56 md:h-80 lg:h-96"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 z-20" />
            </PromoImage>
          )}

          <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between z-30">
            <Link
              to={`/hotel/${hotel.id}`}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
              aria-label={t('a11y.back')}
            >
              <ArrowLeft size={18} />
            </Link>
            <button
              type="button"
              onClick={handleShare}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
              aria-label={t('a11y.share')}
            >
              <Share2 size={18} />
            </button>
          </div>

          {hasPromo && (
            <span className="absolute top-16 md:top-20 right-4 md:right-6 bg-red-600 text-white font-black text-base md:text-xl px-3 py-1 rounded-full shadow-lg z-30">
              {rest.porcentaje} {t('alimentos.off')}
            </span>
          )}

          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 text-white z-30">
            <p className="text-[11px] md:text-sm uppercase tracking-widest opacity-90">
              {hotel.name}
            </p>
            <h1 className="font-black text-2xl md:text-4xl tracking-tight drop-shadow leading-tight">
              {tr(rest.nombrePromocion) || rest.nombreCentroConsumo}
            </h1>
            <p className="text-sm md:text-base flex items-center gap-1 mt-1 drop-shadow">
              <MapPin size={14} /> {rest.nombreCentroConsumo} · {hotel.ciudad}{hotel.zona ? ` · ${hotel.zona}` : ''}, {hotel.estado}
            </p>
          </div>
        </div>

        <section className="p-4 md:p-6 lg:p-8 space-y-5">
          {hasPromo && (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-5 space-y-2">
              <p className="text-xs md:text-sm font-black text-amber-800 uppercase tracking-tight flex items-center gap-2">
                <Flame size={16} className="text-amber-600" /> {tr(rest.descuento)}
              </p>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {tr(rest.descripcionPromo)}
              </p>
            </div>
          )}

          {(rest.horarios?.length > 0 || (hasPromo && rest.fechaHorarioPublicacion)) && (
            <div className="flex items-center flex-wrap gap-3">
              {rest.horarios?.length > 0 && (
                <OpenStatusBadge horarios={rest.horarios} size="lg" />
              )}
              {hasPromo && rest.fechaHorarioPublicacion && (
                <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5">
                  <Clock size={14} />
                  {t('alimentos.publicacion')}:{' '}
                  {new Date(rest.fechaHorarioPublicacion).toLocaleDateString(locale)}
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
