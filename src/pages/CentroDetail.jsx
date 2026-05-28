// Listado de promos de un centro de consumo. Llega aquí desde el badge
// "Promos disponibles" del RestaurantCard; toda la info base del centro
// ya se vio en esa tarjeta, así que aquí solo mostramos las promos.

import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';
import { findCentroIdxBySlug } from '../lib/slug.js';
import PromoImage from '../components/PromoImage.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';
import { useTr } from '../lib/i18nData.js';

export default function CentroDetail() {
  const { t } = useTranslation();
  const { tr } = useTr();
  const { hotelId, centroSlug: slug } = useParams();
  const { hoteles, loading } = useHotels();
  const hotel = hoteles.find((h) => h.id === hotelId);
  const idx = hotel ? findCentroIdxBySlug(hotel.restaurantes, slug) : -1;
  const rest = idx >= 0 ? hotel.restaurantes[idx] : null;

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!hotel || !rest) return <NotFound />;

  const promos = rest.promos || [];

  return (
    <div className="min-h-screen text-gray-900 font-sans px-2 md:px-0">
      <div className="max-w-md md:max-w-2xl lg:max-w-3xl mx-auto bg-white shadow-2xl border-x border-gray-200 min-h-screen">
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-sm border-b border-gray-100 p-3 md:p-4 flex items-center gap-3">
          <Link
            to={`/hotel/${hotel.id}`}
            className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 shadow-sm border border-gray-200 transition-colors"
            aria-label={t('a11y.back')}
          >
            <ArrowLeft size={18} />
          </Link>
          <h1 className="font-black text-gray-900 text-base md:text-lg truncate">
            {t('centro.promociones')}
          </h1>
          {promos.length > 0 && (
            <span className="ml-auto text-[11px] bg-red-50 text-red-700 border border-red-100 px-2.5 py-1 rounded-full font-bold whitespace-nowrap">
              {t('centro.promosCount', { count: promos.length })}
            </span>
          )}
        </header>

        <section className="p-4 md:p-6 lg:p-8">
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
        </section>
      </div>
    </div>
  );
}
