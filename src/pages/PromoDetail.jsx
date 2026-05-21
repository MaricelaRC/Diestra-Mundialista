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
import { hotelesDiestra } from '../data/hoteles.js';
import OpenStatusBadge from '../components/OpenStatusBadge.jsx';
import NotFound from './NotFound.jsx';

export default function PromoDetail() {
  const { t, i18n } = useTranslation();
  const { hotelId, idx } = useParams();
  const hotel = hotelesDiestra.find((h) => h.id === hotelId);
  const restIdx = Number(idx);
  const rest = hotel?.restaurantes?.[restIdx];

  if (!hotel || !rest) return <NotFound />;

  const locale = i18n.language?.startsWith('en') ? 'en-US' : 'es-MX';
  const phoneNumber = rest.contacto.replace('+', '');
  const hasRestaurantInfo =
    rest.descripcionRestaurante ||
    rest.tipoCocina ||
    (rest.horarios && rest.horarios.length > 0) ||
    (rest.especialidades && rest.especialidades.length > 0) ||
    rest.web;

  const handleShare = async () => {
    const shareData = {
      title: `${rest.nombrePromocion} · ${hotel.name}`,
      text: rest.descripcionPromo,
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
            <div className="w-full h-56 md:h-80 lg:h-96 bg-gray-200 overflow-hidden">
              <img
                src={rest.portada}
                alt={rest.nombreCentroConsumo}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>
          )}

          <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between">
            <Link
              to={`/hotel/${hotel.id}`}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
              aria-label="Volver"
            >
              <ArrowLeft size={18} />
            </Link>
            <button
              type="button"
              onClick={handleShare}
              className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-md backdrop-blur-sm transition-colors"
              aria-label="Compartir"
            >
              <Share2 size={18} />
            </button>
          </div>

          <span className="absolute top-16 md:top-20 right-4 md:right-6 bg-red-600 text-white font-black text-base md:text-xl px-3 py-1 rounded-full shadow-lg">
            {rest.porcentaje} {t('alimentos.off')}
          </span>

          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 text-white">
            <p className="text-[11px] md:text-sm uppercase tracking-widest opacity-90">
              {hotel.name}
            </p>
            <h1 className="font-black text-2xl md:text-4xl tracking-tight drop-shadow leading-tight">
              {rest.nombrePromocion}
            </h1>
            <p className="text-sm md:text-base flex items-center gap-1 mt-1 drop-shadow">
              <MapPin size={14} /> {rest.nombreCentroConsumo} · {hotel.ciudad}
            </p>
          </div>
        </div>

        <section className="p-4 md:p-6 lg:p-8 space-y-5">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 md:p-5 space-y-2">
            <p className="text-xs md:text-sm font-black text-amber-800 uppercase tracking-tight flex items-center gap-2">
              <Flame size={16} className="text-amber-600" /> {rest.descuento}
            </p>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              {rest.descripcionPromo}
            </p>
          </div>

          <div className="flex items-center flex-wrap gap-3">
            {rest.horarios?.length > 0 && (
              <OpenStatusBadge horarios={rest.horarios} size="lg" />
            )}
            <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1.5">
              <Clock size={14} />
              {t('alimentos.publicacion')}:{' '}
              {new Date(rest.fechaHorarioPublicacion).toLocaleDateString(locale)}
            </span>
          </div>

          {hasRestaurantInfo && (
            <div className="border border-gray-200 rounded-2xl p-4 md:p-5 space-y-4 bg-white">
              <h2 className="font-bold text-gray-900 text-base md:text-lg">
                {t('promo.detalle.sobre')}
              </h2>

              {rest.tipoCocina && (
                <p className="inline-flex items-center gap-1.5 text-xs md:text-sm text-blue-700 font-semibold bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  <UtensilsCrossed size={14} /> {rest.tipoCocina}
                </p>
              )}

              {rest.descripcionRestaurante && (
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {rest.descripcionRestaurante}
                </p>
              )}

              {rest.especialidades && rest.especialidades.length > 0 && (
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 flex items-center gap-1.5">
                    <Sparkles size={12} /> {t('promo.detalle.especialidades')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {rest.especialidades.map((esp) => (
                      <span
                        key={esp}
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
                    {rest.horarios.map((h) => (
                      <div
                        key={h.servicio}
                        className="flex justify-between items-center gap-3 px-3 py-2.5 md:px-4 bg-gray-50/40"
                      >
                        <dt className="text-sm text-gray-600 font-medium">{h.servicio}</dt>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
            <a
              href={`https://wa.me/${phoneNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors uppercase tracking-wider text-sm"
            >
              <Phone size={14} /> WhatsApp
            </a>
            <a
              href={`tel:${rest.contacto}`}
              className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-colors uppercase tracking-wider text-sm"
            >
              <Phone size={14} /> {rest.contacto}
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
