import { ChevronDown, ChevronUp, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import RestaurantCard from './RestaurantCard.jsx';

export default function HotelCard({ hotel, expanded, onToggle }) {
  const { t } = useTranslation();
  const count = hotel.restaurantes.length;
  const label = count === 1 ? t('alimentos.centroSingular') : t('alimentos.centroPlural');

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        expanded
          ? 'border-blue-500 bg-blue-50/10 shadow-md'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        aria-controls={`hotel-panel-${hotel.id}`}
        className="w-full p-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
      >
        <div>
          <h4 className="font-bold text-gray-900 text-sm tracking-tight">{hotel.name}</h4>
          <span className="text-[10px] text-gray-400 flex items-center gap-1 mt-0.5">
            <MapPin size={10} /> {hotel.ciudad}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-bold">
            {count} {label}
          </span>
          {expanded ? (
            <ChevronUp size={16} className="text-blue-600" />
          ) : (
            <ChevronDown size={16} className="text-gray-400" />
          )}
        </div>
      </button>

      {expanded && (
        <div
          id={`hotel-panel-${hotel.id}`}
          className="border-t border-gray-100 bg-white p-3 space-y-4 animate-in slide-in-from-top duration-200"
        >
          {hotel.restaurantes.map((rest, idx) => (
            <RestaurantCard key={idx} restaurante={rest} />
          ))}
        </div>
      )}
    </div>
  );
}
