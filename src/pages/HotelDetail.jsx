import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, MapPin, Share2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';
import RestaurantCard from '../components/RestaurantCard.jsx';
import Loader from '../components/Loader.jsx';
import NotFound from './NotFound.jsx';

export default function HotelDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { hoteles, loading } = useHotels();
  const hotel = hoteles.find((h) => h.id === id);

  // Evita renderizar con datos del fallback estático antes del primer
  // snapshot de Firestore (causaba "flash" del valor viejo al recargar).
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader />
      </div>
    );
  }
  if (!hotel) return <NotFound />;

  const cover = hotel.restaurantes[0]?.portada;

  const handleShare = async () => {
    const shareData = {
      title: hotel.name,
      text: `${hotel.name} · ${hotel.ciudad}${hotel.zona ? ` · ${hotel.zona}` : ''}, ${hotel.estado}`,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
      }
    } catch {
      // El usuario canceló o el navegador rechazó; no es error.
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen">
        {/* Hero: imagen del centro destacado, o gradiente si el hotel no tiene foto */}
        <div className="relative">
          <div className="w-full h-56 md:h-80 lg:h-96 overflow-hidden bg-gradient-to-br from-blue-700 to-indigo-800">
            {cover && (
              <img src={cover} alt={hotel.name} className="w-full h-full object-cover" />
            )}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/55" />

          <div className="absolute top-0 inset-x-0 p-4 md:p-6 flex items-center justify-between">
            <Link
              to="/"
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

          <div className="absolute bottom-0 inset-x-0 p-4 md:p-6 text-white">
            <h1 className="font-black text-xl md:text-3xl tracking-tight drop-shadow">
              {hotel.name}
            </h1>
            <p className="text-sm md:text-base flex items-center gap-1 mt-1 drop-shadow">
              <MapPin size={14} /> {hotel.ciudad}{hotel.zona ? ` · ${hotel.zona}` : ''}, {hotel.estado}
            </p>
          </div>
        </div>

        {/* Listado de centros de consumo */}
        <section className="p-4 md:p-6 lg:p-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-gray-800 text-base md:text-lg">
              {t('hotel.detail.centros')}
            </h2>
            <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-bold">
              {hotel.restaurantes.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {hotel.restaurantes.map((rest, idx) => (
              <RestaurantCard key={idx} restaurante={rest} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
