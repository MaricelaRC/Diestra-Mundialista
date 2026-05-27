// Lista de hoteles que el admin tiene permiso para editar (intersección
// entre el catálogo de Firestore y adminDoc.hotelIds). Click en uno → editor.

import { Link } from 'react-router-dom';
import { ChevronRight, LogOut, MapPin, Pencil } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useHotels } from '../../hooks/useHotels.js';

export default function AdminDashboard() {
  const { user, adminDoc, signOut } = useAuth();
  const { hoteles } = useHotels();

  const allowedIds = new Set(adminDoc?.hotelIds || []);
  const editableHotels = hoteles.filter((h) => allowedIds.has(h.id));

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between">
        <div>
          <h1 className="font-black text-gray-900 text-lg md:text-xl tracking-tight">Panel Diestra</h1>
          <p className="text-xs text-gray-500">Promociones · {user.email}</p>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-3 py-2 rounded-lg"
        >
          <LogOut size={14} />
          Salir
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3">
          Hoteles que administras · {editableHotels.length}
        </h2>

        {editableHotels.length === 0 ? (
          <p className="text-sm text-gray-500 bg-white border border-gray-200 rounded-xl p-6 text-center">
            Aún no tienes hoteles asignados.
          </p>
        ) : (
          <ul className="space-y-2">
            {editableHotels.map((h) => {
              const promosCount = (h.restaurantes || []).filter((r) => r.porcentaje).length;
              const totalCentros = (h.restaurantes || []).length;
              return (
                <li key={h.id}>
                  <Link
                    to={`/admin/hotel/${h.id}`}
                    className="block bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-4 transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900 truncate">{h.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                          <MapPin size={11} />
                          {h.ciudad}{h.zona ? ` · ${h.zona}` : ''}, {h.estado}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-full whitespace-nowrap">
                          {promosCount} / {totalCentros} con promo
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-blue-600 group-hover:translate-x-0.5 transition-transform">
                          <Pencil size={14} />
                          <ChevronRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </main>
    </div>
  );
}
