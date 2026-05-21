import { BarChart3, Newspaper, Trophy, UtensilsCrossed, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ITEMS = [
  { id: 'alimentos',    Icon: UtensilsCrossed },
  { id: 'partidos',     Icon: Trophy },
  { id: 'noticias',     Icon: Newspaper },
  { id: 'tablas',       Icon: BarChart3 },
  { id: 'alineaciones', Icon: Users }
];

export default function MobileNavBar({ activeTab, onTabChange }) {
  const { t } = useTranslation();

  return (
    <nav
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200"
      role="tablist"
      aria-label={t('mobileNav.label')}
    >
      <div
        className="max-w-md mx-auto grid grid-cols-5 px-2 pt-1.5"
        style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0.375rem)' }}
      >
        {ITEMS.map(({ id, Icon }) => {
          const isActive = activeTab === id;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onTabChange(id)}
              className="relative flex flex-col items-center justify-center gap-0.5 py-1.5 px-1 rounded-xl active:bg-gray-100 transition-colors"
            >
              <span
                className={`absolute top-0 left-1/2 -translate-x-1/2 h-1 rounded-full bg-blue-600 transition-all ${
                  isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
                }`}
              />
              <Icon
                size={22}
                strokeWidth={isActive ? 2.5 : 2}
                className={`transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-400'
                }`}
              />
              <span
                className={`text-[10px] font-semibold tracking-tight transition-colors ${
                  isActive ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {t(`mobileNav.items.${id}`)}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
