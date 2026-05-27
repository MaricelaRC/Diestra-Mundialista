import { useState } from 'react';
import { BarChart3 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { grupos, grupoIds } from '../data/standings.js';
import { useTr } from '../lib/i18nData.js';

export default function StandingsTable() {
  const { t } = useTranslation();
  const { tr } = useTr();
  const [selected, setSelected] = useState('A');
  const grupo = grupos[selected];

  return (
    <section className="space-y-4 animate-in fade-in duration-300">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-bold text-gray-800 text-sm md:text-lg flex items-center gap-2">
          <BarChart3 size={18} className="text-blue-600" />
          {t('tablas.title', { nombre: tr(grupo.nombre) })}
        </h3>
      </div>

      <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1" role="tablist">
        {grupoIds.map((id) => {
          const isActive = id === selected;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(id)}
              className={`flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full font-extrabold text-sm transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {id}
            </button>
          );
        })}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-100 text-[10px] md:text-xs text-gray-400 font-bold uppercase">
              <th className="py-3 px-4">{t('tablas.header.club')}</th>
              <th className="py-3 px-2 text-center">{t('tablas.header.pj')}</th>
              <th className="py-3 px-2 text-center">{t('tablas.header.dg')}</th>
              <th className="py-3 px-4 text-center">{t('tablas.header.pts')}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs md:text-sm">
            {grupo.equipos.map((equipo, idx) => {
              const dgClass = equipo.dg.startsWith('+')
                ? 'font-bold text-green-600'
                : 'text-gray-600';
              const ptsClass = equipo.destacado
                ? 'font-extrabold text-blue-600 text-sm md:text-base'
                : equipo.eliminado
                  ? 'font-bold text-gray-500'
                  : 'font-bold text-gray-800';
              const rowClass = equipo.destacado
                ? 'bg-blue-50/30 font-medium'
                : equipo.eliminado
                  ? 'bg-red-50/10'
                  : '';
              return (
                <tr key={idx} className={rowClass}>
                  <td className="py-3 px-4 flex items-center gap-2">
                    <span className="w-5 text-gray-400 font-bold">{idx + 1}</span>
                    <span className="text-base">{equipo.flag}</span>
                    <span
                      className={
                        equipo.destacado
                          ? 'font-bold'
                          : equipo.eliminado
                            ? 'text-gray-500'
                            : 'text-gray-700'
                      }
                    >
                      {tr(equipo.name)}
                    </span>
                  </td>
                  <td className="py-3 px-2 text-center text-gray-500">{equipo.pj}</td>
                  <td className={`py-3 px-2 text-center ${dgClass}`}>{equipo.dg}</td>
                  <td className={`py-3 px-4 text-center ${ptsClass}`}>{equipo.pts}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
