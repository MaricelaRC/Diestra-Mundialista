import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Beer, Calendar, ChevronRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { findMatchById } from '../services/gemini.js';
import { sedeAHotel, sedeFallback } from '../data/sedeAHotel.js';
import NotFound from './NotFound.jsx';
import { useTr } from '../lib/i18nData.js';

export default function MatchDetail() {
  const { t } = useTranslation();
  const { tr } = useTr();
  const { id } = useParams();
  const match = findMatchById(id);

  if (!match) return <NotFound />;

  const partner = sedeAHotel[match.city] || sedeFallback;
  const isLive = match.status === 'live';

  return (
    <div className="min-h-screen text-gray-900 font-sans">
      <div className="max-w-md md:max-w-3xl lg:max-w-4xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen">
        <div className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white p-4 md:p-8 relative">
          <Link
            to="/"
            className="absolute top-4 left-4 md:top-6 md:left-6 bg-white/15 hover:bg-white/25 backdrop-blur rounded-full p-2 transition-colors"
            aria-label={t('a11y.back')}
          >
            <ArrowLeft size={18} />
          </Link>

          <div className="text-center pt-10 md:pt-6">
            <div className="flex items-center justify-center gap-2 text-[11px] md:text-sm uppercase tracking-widest opacity-90">
              <Calendar size={14} /> {match.date} · {match.time}
              <span
                className={`ml-2 px-2 py-0.5 rounded-full ${
                  isLive ? 'bg-red-600 text-white' : 'bg-white/20 text-white'
                }`}
              >
                {t(`partidos.status.${match.status}`, match.status)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 md:gap-8 mt-6">
              <div className="flex-1 text-right">
                <p className="text-2xl md:text-4xl font-black tracking-tight">{tr(match.home)}</p>
              </div>
              <div className="text-xl md:text-3xl italic font-light opacity-60">vs</div>
              <div className="flex-1 text-left">
                <p className="text-2xl md:text-4xl font-black tracking-tight">{tr(match.away)}</p>
              </div>
            </div>

            <p className="mt-4 text-xs md:text-base opacity-90 flex items-center justify-center gap-1">
              <MapPin size={14} /> {match.stadium} · {match.city}
            </p>
          </div>
        </div>

        <section className="p-4 md:p-8 space-y-5">
          <div>
            <h2 className="text-sm md:text-base font-bold text-gray-800 mb-3">
              {t('partido.detalle.dondeVerlo')}
            </h2>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-blue-50 hover:bg-blue-100 border border-blue-100 rounded-2xl p-4 md:p-5 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white p-3 rounded-xl shadow-sm border border-blue-100">
                  <Beer size={20} className="text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-[10px] md:text-xs font-bold text-blue-600 uppercase tracking-wide">
                    {t('partidos.sugerencia', { name: partner.name })}
                  </p>
                  <p className="text-sm md:text-base text-gray-800 font-semibold mt-0.5">
                    {partner.promo}
                  </p>
                </div>
                <ChevronRight size={20} className="text-blue-600" />
              </div>
            </a>
          </div>

          <p className="text-xs text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
            {t('partido.detalle.disclaimer')}
          </p>
        </section>
      </div>
    </div>
  );
}
