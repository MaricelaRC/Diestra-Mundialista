import { useTranslation } from 'react-i18next';

const TAB_IDS = ['alimentos', 'partidos', 'noticias', 'tablas', 'alineaciones'];

// Top tabs solo en desktop/tablet. En móvil el navegador inferior (MobileNavBar)
// es la fuente única de cambio de pestaña.
export default function Tabs({ activeTab, onTabChange }) {
  const { t } = useTranslation();

  return (
    <nav
      className="hidden md:flex overflow-x-auto px-2 md:px-6 lg:px-8 gap-1 text-sm no-scrollbar"
      role="tablist"
    >
      {TAB_IDS.map((id) => {
        const isActive = activeTab === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onTabChange(id)}
            className={`py-3 px-3 whitespace-nowrap transition-all relative font-medium ${
              isActive ? 'text-blue-600 font-bold' : 'text-gray-500'
            }`}
          >
            {t(`tabs.${id}`)}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-blue-600 rounded-t-full" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
