import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BarChart3,
  Mail,
  Newspaper,
  Search,
  Trophy,
  UtensilsCrossed,
  Users,
  X
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NAV_ITEMS = [
  { id: 'alimentos',    Icon: UtensilsCrossed },
  { id: 'partidos',     Icon: Trophy },
  { id: 'noticias',     Icon: Newspaper },
  { id: 'tablas',       Icon: BarChart3 },
  { id: 'alineaciones', Icon: Users }
];

export default function MobileDrawer({ open, onClose, activeTab, onTabChange }) {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('en') ? 'en' : 'es';

  // Bloquea el scroll del body mientras el drawer está abierto
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  // Cierra con tecla Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  const handleTab = (id) => {
    onTabChange(id);
    onClose();
  };

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label={t('drawer.label')}
        className={`md:hidden fixed inset-y-0 left-0 z-[70] w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-start justify-between p-5 border-b border-gray-100">
          <div>
            <p className="text-blue-600 font-black text-xl tracking-tight">DIESTRA</p>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">
              World Cup 2026
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 -mr-2 -mt-1 rounded-full text-gray-500 hover:bg-gray-100 active:bg-gray-200"
            aria-label={t('drawer.close')}
          >
            <X size={20} />
          </button>
        </div>

        <nav className="p-3 space-y-1 overflow-y-auto">
          <p className="px-3 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {t('drawer.sections.pestanas')}
          </p>
          {NAV_ITEMS.map(({ id, Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleTab(id)}
                className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-colors text-left ${
                  isActive
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                }`}
              >
                <Icon
                  size={20}
                  strokeWidth={isActive ? 2.5 : 2}
                  className={isActive ? 'text-blue-600' : 'text-gray-500'}
                />
                <span className="font-semibold text-sm flex-1">
                  {t(`mobileNav.items.${id}`)}
                </span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" aria-hidden="true" />
                )}
              </button>
            );
          })}

          <div className="h-px bg-gray-100 my-3" />

          <p className="px-3 pt-1 pb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {t('drawer.sections.acciones')}
          </p>
          <Link
            to="/buscar"
            onClick={onClose}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            <Search size={20} className="text-gray-500" />
            <span className="font-semibold text-sm">{t('drawer.acciones.buscar')}</span>
          </Link>
          <Link
            to="/contacto"
            onClick={onClose}
            className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            <Mail size={20} className="text-gray-500" />
            <span className="font-semibold text-sm">{t('drawer.acciones.suscribirme')}</span>
          </Link>
        </nav>

        <div className="mt-auto border-t border-gray-100 p-5 space-y-3">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
            {t('drawer.sections.idioma')}
          </p>
          <div className="flex gap-2">
            {['es', 'en'].map((lang) => {
              const isActive = currentLang === lang;
              return (
                <button
                  key={lang}
                  type="button"
                  onClick={() => i18n.changeLanguage(lang)}
                  className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {lang}
                </button>
              );
            })}
          </div>
          <p
            className="text-[10px] text-gray-400 pt-2"
            style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 0px)' }}
          >
            © 2026 Grupo Diestra
          </p>
        </div>
      </aside>
    </>
  );
}
