import { Link } from 'react-router-dom';
import { ChevronRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function HotelCardLink({ hotel }) {
  const { t } = useTranslation();
  const count = hotel.restaurantes.length;
  const label = count === 1 ? t('alimentos.cuentaSingular') : t('alimentos.cuentaPlural');
  const cover = hotel.coverImg || hotel.restaurantes[0]?.portada;

  return (
    <Link
      to={`/hotel/${hotel.id}`}
      className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-300 transition-all flex flex-col"
    >
      {cover ? (
        <div className="w-full h-40 bg-gray-100 overflow-hidden">
          <img
            src={cover}
            alt={hotel.name}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      ) : (
        <div className="w-full h-40 bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-4">
          <span className="text-white font-black text-lg tracking-tight text-center leading-tight">
            {hotel.name}
          </span>
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col justify-between gap-3">
        <div>
          <h4 className="font-bold text-gray-900 text-[15px] tracking-tight leading-tight">
            {hotel.name}
          </h4>
          <span className="text-xs text-gray-400 flex items-center gap-1 mt-1">
            <MapPin size={12} /> {hotel.ciudad}{hotel.zona ? ` · ${hotel.zona}` : ''}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-bold whitespace-nowrap">
            {count} {label}
          </span>
          <ChevronRight
            size={18}
            className="text-blue-600 group-hover:translate-x-1 transition-transform"
          />
        </div>
      </div>
    </Link>
  );
}
