import { useState } from 'react';
import { Search, Mail, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Stories from './Stories.jsx';
import Tabs from './Tabs.jsx';
import MobileDrawer from './MobileDrawer.jsx';

export default function Header({ activeTab, onTabChange }) {
  const { t, i18n } = useTranslation();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [logoOk, setLogoOk] = useState(true);

  const toggleLang = () => {
    const next = i18n.language?.startsWith('en') ? 'es' : 'en';
    i18n.changeLanguage(next);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 md:px-6 lg:px-8 py-3 gap-3">
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="md:hidden p-1 -ml-1 text-gray-700 hover:text-blue-600 active:scale-95 transition-transform"
            aria-label={t('header.openMenu')}
            aria-expanded={drawerOpen}
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            {logoOk ? (
              <img
                src="/logo-diestra.png"
                alt="Grupo Diestra"
                className="h-7 md:h-9 w-auto"
                onError={() => setLogoOk(false)}
              />
            ) : (
              <span className="text-blue-600 font-black text-lg md:text-xl tracking-tight">
                DIESTRA
              </span>
            )}
          </Link>

          <Link
            to="/buscar"
            className="bg-gray-100 hover:bg-gray-200 transition-colors rounded-full px-4 py-2 flex items-center gap-2 flex-1 min-w-0 max-w-xl border border-gray-200/50"
            aria-label={t('buscar.cta')}
          >
            <Search size={14} className="text-gray-400 flex-shrink-0" />
            <span className="text-xs md:text-sm text-gray-500 truncate min-w-0">
              {t('header.searchPlaceholder')}
            </span>
          </Link>

          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            <button
              type="button"
              onClick={toggleLang}
              className="hidden md:inline-flex text-[10px] font-bold uppercase tracking-wider text-gray-500 hover:text-blue-600 border border-gray-200 rounded-full px-2 py-1"
              aria-label="Toggle language"
            >
              {i18n.language?.startsWith('en') ? 'EN' : 'ES'}
            </button>
            <Link
              to="/contacto"
              className="hidden md:inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-2 rounded-full transition-colors"
            >
              <Mail size={14} /> {t('header.suscribirse')}
            </Link>
          </div>
        </div>

        <Stories />
        <Tabs activeTab={activeTab} onTabChange={onTabChange} />
      </header>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeTab={activeTab}
        onTabChange={onTabChange}
      />
    </>
  );
}
