import { useState } from 'react';
import { MoreHorizontal, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header.jsx';
import Loader from '../components/Loader.jsx';
import HotelCard from '../components/HotelCard.jsx';
import HotelCardLink from '../components/HotelCardLink.jsx';
import MatchCard from '../components/MatchCard.jsx';
import NewsItem from '../components/NewsItem.jsx';
import StandingsTable from '../components/StandingsTable.jsx';
import Lineup from '../components/Lineup.jsx';
import PromoBanner from '../components/PromoBanner.jsx';
import MundialCountdown from '../components/MundialCountdown.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import MobileNavBar from '../components/MobileNavBar.jsx';
import { useHotels } from '../hooks/useHotels.js';
import { useWorldCupData } from '../hooks/useWorldCupData.js';

export default function Home() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('alimentos');
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { matches, news, loading: wcLoading } = useWorldCupData();
  const { hoteles, loading: hotelsLoading } = useHotels();
  const loading = wcLoading || hotelsLoading;

  const toggleHotel = (hotelId) =>
    setSelectedHotel((prev) => (prev === hotelId ? null : hotelId));

  return (
    <div className="min-h-screen text-gray-900 font-sans px-2 md:px-0">
      <div className="max-w-md md:max-w-3xl lg:max-w-6xl mx-auto bg-white/85 md:bg-white backdrop-blur-md shadow-2xl border-x border-gray-200 min-h-screen flex flex-col">
        <Header activeTab={activeTab} onTabChange={setActiveTab} />

        <main className="flex-1 p-4 md:p-6 lg:p-8 pb-28 md:pb-12 space-y-8">
          <MundialCountdown />
          {loading ? (
            <Loader />
          ) : (
            <div className="animate-in fade-in duration-500 space-y-8">
              {activeTab === 'alimentos' && (
                <section className="space-y-5">
                  <PromoBanner />

                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 md:p-6 rounded-2xl border border-blue-100">
                    <h3 className="font-extrabold text-blue-900 text-sm md:text-base flex items-center gap-2">
                      <UtensilsCrossed size={16} className="text-blue-600 animate-pulse" />
                      {t('alimentos.intro.title')}
                    </h3>
                    <p className="text-[11px] md:text-sm text-blue-700 mt-1 leading-relaxed">
                      {t('alimentos.intro.body')}
                    </p>
                  </div>

                  <div className="space-y-3 md:hidden">
                    {hoteles.map((hotel) => (
                      <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        expanded={selectedHotel === hotel.id}
                        onToggle={() => toggleHotel(hotel.id)}
                      />
                    ))}
                  </div>

                  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {hoteles.map((hotel) => (
                      <HotelCardLink key={hotel.id} hotel={hotel} />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'partidos' && (
                <section className="space-y-4">
                  <div className="flex items-center justify-between px-1">
                    <h3 className="font-bold text-gray-800 text-sm md:text-lg">
                      {t('partidos.title')}
                    </h3>
                    <MoreHorizontal size={16} className="text-gray-400" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {matches.map((match) => (
                      <MatchCard key={match.id} match={match} />
                    ))}
                  </div>
                </section>
              )}

              {activeTab === 'noticias' && (
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {news.map((item, idx) => (
                    <NewsItem key={idx} item={item} />
                  ))}
                </section>
              )}

              {activeTab === 'tablas' && <StandingsTable />}
              {activeTab === 'alineaciones' && <Lineup />}
            </div>
          )}

          <NewsletterForm />
        </main>
      </div>

      <MobileNavBar activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}
