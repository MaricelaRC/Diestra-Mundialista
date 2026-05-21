import { useState } from 'react';
import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { alineaciones, equipoIds } from '../data/lineup.js';

function PlayerDot({ num, nombre, color }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-9 h-9 md:w-11 md:h-11 rounded-full ${color} border-2 border-white flex items-center justify-center font-black text-xs md:text-sm shadow-md`}
      >
        {num}
      </div>
      <span className="text-[9px] md:text-[11px] font-bold bg-black/60 px-1.5 py-0.5 rounded mt-1 whitespace-nowrap">
        {nombre}
      </span>
    </div>
  );
}

export default function Lineup() {
  const { t } = useTranslation();
  const [selected, setSelected] = useState('mexico');
  const lineup = alineaciones[selected];

  return (
    <section className="space-y-4 animate-in fade-in duration-300">
      <div className="flex items-center justify-between px-1">
        <h3 className="font-bold text-gray-800 text-sm md:text-lg flex items-center gap-2">
          <Users size={18} className="text-blue-600" />
          {t('alineaciones.title', { equipo: lineup.equipo, formacion: lineup.formacion })}
        </h3>
      </div>

      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1" role="tablist">
        {equipoIds.map((id) => {
          const team = alineaciones[id];
          const isActive = id === selected;
          return (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setSelected(id)}
              className={`flex-shrink-0 flex items-center gap-2 px-3 py-2 rounded-full text-xs md:text-sm font-bold transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-md scale-105'
                  : 'bg-white text-gray-500 border border-gray-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              <span className="text-base">{team.flag}</span>
              {team.equipo}
            </button>
          );
        })}
      </div>

      <div className="bg-green-700 border-2 border-green-800 rounded-2xl p-4 md:p-6 relative overflow-hidden shadow-inner text-white flex flex-col justify-between h-[420px] md:h-[520px]">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-white/20 -translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 border-2 border-white/20 rounded-full -translate-x-1/2 -translate-y-1/2" />

        <div className="flex justify-around items-center z-10 pt-4">
          {lineup.delanteros.map((p) => (
            <PlayerDot key={p.num} {...p} color="bg-red-600" />
          ))}
        </div>

        <div className="flex justify-around items-center z-10 py-2">
          {lineup.mediocampistas.map((p) => (
            <PlayerDot key={p.num} {...p} color="bg-green-600" />
          ))}
        </div>

        <div className="flex justify-around items-center z-10 py-2">
          {lineup.defensas.map((p) => (
            <PlayerDot key={p.num} {...p} color="bg-green-600" />
          ))}
        </div>

        <div className="flex justify-center items-center z-10 pb-4">
          <PlayerDot {...lineup.portero} color="bg-amber-500" />
        </div>
      </div>
    </section>
  );
}
