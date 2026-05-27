// Input bilingüe con tabs ES/EN. Recibe un value { es, en } y un onChange
// que dispara con el objeto completo cuando cualquiera de los dos cambia.
// Soporta type "text" (input línea) y "textarea" (multi-línea).

import { useState } from 'react';

const TABS = [
  { id: 'es', label: 'Español' },
  { id: 'en', label: 'English' }
];

export default function BilingualField({
  label,
  value,
  onChange,
  type = 'text',
  rows = 3,
  placeholder = ''
}) {
  const [activeTab, setActiveTab] = useState('es');
  const safe = value && typeof value === 'object' ? value : { es: '', en: '' };

  const update = (lang, v) => {
    onChange({ ...safe, [lang]: v });
  };

  const inputClass =
    'w-full mt-2 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500';

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">
          {label}
        </label>
        <div className="flex gap-1 text-[10px]" role="tablist">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            const filled = safe[tab.id]?.trim().length > 0;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`px-2 py-0.5 rounded-full font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : filled
                      ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                }`}
                title={filled ? `${tab.label} (lleno)` : `${tab.label} (vacío)`}
              >
                {tab.id}
              </button>
            );
          })}
        </div>
      </div>
      {type === 'textarea' ? (
        <textarea
          value={safe[activeTab] || ''}
          onChange={(e) => update(activeTab, e.target.value)}
          rows={rows}
          placeholder={placeholder}
          className={inputClass}
        />
      ) : (
        <input
          type="text"
          value={safe[activeTab] || ''}
          onChange={(e) => update(activeTab, e.target.value)}
          placeholder={placeholder}
          className={inputClass}
        />
      )}
    </div>
  );
}
