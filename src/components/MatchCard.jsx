import { Link } from 'react-router-dom';
import { Beer, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sedeAHotel, sedeFallback } from '../data/sedeAHotel.js';

export default function MatchCard({ match }) {
  const { t } = useTranslation();
  const partner = sedeAHotel[match.city] || sedeFallback;
  const isLive = match.status === 'En vivo' || match.status === 'Live';

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/partido/${match.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
        <div className="flex justify-between items-center text-[10px] text-gray-500 mb-3 uppercase tracking-wider">
          <span>
            {match.date} • {match.time}
          </span>
          <span className={isLive ? 'text-red-600 font-bold' : 'font-bold'}>
            {match.status}
          </span>
        </div>

        <div className="flex items-center justify-between px-2">
          <div className="flex flex-col items-center w-24 text-center">
            <span className="text-sm font-bold text-gray-900">{match.home}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-xl font-light text-gray-300 italic">{t('partidos.vs')}</span>
            <span className="text-[9px] text-gray-400 uppercase mt-1">{match.city}</span>
          </div>
          <div className="text-center w-24">
            <span className="text-sm font-bold text-gray-900">{match.away}</span>
          </div>
        </div>
      </Link>

      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-50/50 p-3 flex items-center justify-between border-t border-blue-50 hover:bg-blue-100/50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 rounded-lg shadow-sm border border-blue-100">
            <Beer size={14} className="text-blue-600" />
          </div>
          <div>
            <p className="text-[9px] font-bold text-blue-600 uppercase leading-none tracking-tighter">
              {t('partidos.sugerencia', { name: partner.name })}
            </p>
            <p className="text-[11px] text-gray-700 font-medium mt-1">{partner.promo}</p>
          </div>
        </div>
        <ChevronRight size={18} className="text-blue-600" />
      </a>
    </div>
  );
}
