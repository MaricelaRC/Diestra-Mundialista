// Editor de promociones por hotel. Lista cada centro de consumo del hotel y
// expone los campos editables (alcance V2 = solo promo: nombre, descuento,
// porcentaje, descripción, fecha publicación, portada). Los datos base del
// restaurante (tipoCocina, descripciones, horarios) se muestran como contexto
// pero no se editan.
//
// Cada centro tiene su propio botón "Guardar" para que cambios accidentales
// en uno no afecten los otros.

import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Check, Flame, Loader2, LogOut, Save, Star } from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase.js';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useHotels } from '../../hooks/useHotels.js';
import BilingualField from '../../components/admin/BilingualField.jsx';
import ImageUploadButton from '../../components/admin/ImageUploadButton.jsx';

// Inicializa la estructura de promo de un restaurante, llenando objetos
// vacíos para campos bilingües ausentes (así BilingualField no recibe undefined).
function defaultPromo(rest) {
  return {
    nombrePromocion: rest.nombrePromocion || { es: '', en: '' },
    descuento: rest.descuento || { es: '', en: '' },
    porcentaje: rest.porcentaje || '',
    descripcionPromo: rest.descripcionPromo || { es: '', en: '' },
    fechaHorarioPublicacion: rest.fechaHorarioPublicacion || '',
    portada: rest.portada || '',
    destacada: Boolean(rest.destacada)
  };
}

// Convierte el ISO de Firestore a formato datetime-local que entiende el input.
function toDatetimeLocal(iso) {
  if (!iso) return '';
  // El input <type=datetime-local> espera "YYYY-MM-DDTHH:mm" sin zona.
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

// Y de vuelta a ISO al guardar (asumimos zona local del admin; suficiente
// para promos que se muestran sin precisión de zona horaria).
function fromDatetimeLocal(value) {
  if (!value) return '';
  return new Date(value).toISOString();
}

export default function AdminHotelEditor() {
  const { id } = useParams();
  const { user, adminDoc, signOut } = useAuth();
  const { hoteles, loading: hotelsLoading } = useHotels();
  const hotel = hoteles.find((h) => h.id === id);

  // Verifica permiso (defensa en profundidad además de Firestore Rules)
  const allowed = adminDoc?.hotelIds?.includes(id);

  // Estado de edición: array paralelo a hotel.restaurantes con los campos
  // editables de cada uno. Se rehidrata cuando cambia el hotel desde Firestore.
  const [drafts, setDrafts] = useState([]);
  const [savingIdx, setSavingIdx] = useState(null);
  const [savedAt, setSavedAt] = useState({}); // { [idx]: timestamp }
  const [errors, setErrors] = useState({});   // { [idx]: 'mensaje' }

  useEffect(() => {
    if (!hotel) return;
    setDrafts(hotel.restaurantes.map(defaultPromo));
  }, [hotel]);

  if (!allowed) return <Navigate to="/admin" replace />;
  // Espera el primer snapshot de Firestore antes de pintar — evita el flash
  // de los valores del fallback estático contra los reales del backend.
  if (hotelsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-600">
        <Loader2 size={32} className="animate-spin" />
      </div>
    );
  }
  if (!hotel) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Hotel no encontrado.
      </div>
    );
  }

  const updateDraft = (idx, patch) => {
    setDrafts((prev) => prev.map((d, i) => (i === idx ? { ...d, ...patch } : d)));
    // limpia error/saved de ese centro al editar
    setErrors((e) => ({ ...e, [idx]: undefined }));
    setSavedAt((s) => ({ ...s, [idx]: undefined }));
  };

  const handleSave = async (idx) => {
    setSavingIdx(idx);
    setErrors((e) => ({ ...e, [idx]: undefined }));
    try {
      // Construir el array de restaurantes actualizado (manteniendo todos
      // los campos no-editables del original)
      const original = hotel.restaurantes[idx];
      const draft = drafts[idx];
      const updated = {
        ...original,
        nombrePromocion: draft.nombrePromocion,
        descuento: draft.descuento,
        porcentaje: draft.porcentaje,
        descripcionPromo: draft.descripcionPromo,
        fechaHorarioPublicacion: draft.fechaHorarioPublicacion,
        portada: draft.portada,
        destacada: draft.destacada
      };
      const nuevoArray = hotel.restaurantes.map((r, i) => (i === idx ? updated : r));
      await updateDoc(doc(db, 'hoteles', hotel.id), { restaurantes: nuevoArray });
      setSavedAt((s) => ({ ...s, [idx]: Date.now() }));
    } catch (err) {
      console.error('[AdminHotelEditor] save failed:', err);
      setErrors((e) => ({ ...e, [idx]: 'No se pudo guardar. Intenta de nuevo.' }));
    } finally {
      setSavingIdx(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <Link
            to="/admin"
            className="p-2 text-gray-500 hover:text-blue-600 hover:bg-gray-100 rounded-lg flex-shrink-0"
            aria-label="Volver al dashboard"
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="min-w-0">
            <h1 className="font-black text-gray-900 text-lg truncate">{hotel.name}</h1>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="inline-flex items-center gap-1.5 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-3 py-2 rounded-lg flex-shrink-0"
        >
          <LogOut size={14} />
          Salir
        </button>
      </header>

      <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
        <p className="text-xs text-gray-500">
          Edita la información de la promoción de cada centro de consumo. Los datos base del
          restaurante (nombre, tipo de cocina, horarios) no se editan desde aquí.
        </p>

        {hotel.restaurantes.map((rest, idx) => {
          const draft = drafts[idx];
          if (!draft) return null;
          const saved = savedAt[idx];
          const err = errors[idx];
          const showSaved = saved && Date.now() - saved < 4000;

          return (
            <section
              key={idx}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <header className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Centro de consumo
                  </p>
                  <h2 className="font-bold text-gray-900 truncate">{rest.nombreCentroConsumo}</h2>
                </div>
                <button
                  type="button"
                  onClick={() => updateDraft(idx, { destacada: !draft.destacada })}
                  className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-lg transition-colors ${
                    draft.destacada
                      ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300'
                      : 'bg-white text-gray-500 border border-gray-200 hover:border-amber-300 hover:text-amber-700'
                  }`}
                  title={draft.destacada ? 'Aparece en el slider de inicio' : 'No aparece en el slider'}
                >
                  <Star size={14} className={draft.destacada ? 'fill-amber-500 text-amber-500' : ''} />
                  {draft.destacada ? 'Destacada en home' : 'Destacar en home'}
                </button>
              </header>

              <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="md:col-span-2">
                  <BilingualField
                    label="Nombre de la promoción"
                    value={draft.nombrePromocion}
                    onChange={(v) => updateDraft(idx, { nombrePromocion: v })}
                    placeholder="Ej. Desayuno Campeones en la Bahía"
                  />
                </div>

                <BilingualField
                  label="Descuento (texto visible)"
                  value={draft.descuento}
                  onChange={(v) => updateDraft(idx, { descuento: v })}
                  placeholder="Ej. 15% de descuento en buffet"
                />

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide block mb-2">
                    Porcentaje (pill rojo)
                  </label>
                  <div className="relative">
                    <Flame size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-600" />
                    <input
                      type="text"
                      value={draft.porcentaje}
                      onChange={(e) => updateDraft(idx, { porcentaje: e.target.value })}
                      placeholder="Ej. 15%"
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <BilingualField
                    label="Descripción larga de la promo"
                    value={draft.descripcionPromo}
                    onChange={(v) => updateDraft(idx, { descripcionPromo: v })}
                    type="textarea"
                    rows={4}
                    placeholder="Describe la promoción con detalle…"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide block mb-2">
                    Fecha de publicación
                  </label>
                  <div className="relative">
                    <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      type="datetime-local"
                      value={toDatetimeLocal(draft.fechaHorarioPublicacion)}
                      onChange={(e) =>
                        updateDraft(idx, { fechaHorarioPublicacion: fromDatetimeLocal(e.target.value) })
                      }
                      className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <ImageUploadButton
                    label="Portada de la promo"
                    value={draft.portada}
                    onChange={(url) => updateDraft(idx, { portada: url })}
                  />
                </div>
              </div>

              <footer className="bg-gray-50 border-t border-gray-200 px-4 md:px-6 py-3 flex items-center justify-end gap-3">
                {err && (
                  <span className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-2 py-1">
                    {err}
                  </span>
                )}
                {showSaved && (
                  <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-100 rounded-lg px-2 py-1 inline-flex items-center gap-1">
                    <Check size={12} /> Guardado
                  </span>
                )}
                <button
                  type="button"
                  onClick={() => handleSave(idx)}
                  disabled={savingIdx === idx}
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
                >
                  <Save size={14} />
                  {savingIdx === idx ? 'Guardando…' : 'Guardar'}
                </button>
              </footer>
            </section>
          );
        })}
      </main>
    </div>
  );
}
