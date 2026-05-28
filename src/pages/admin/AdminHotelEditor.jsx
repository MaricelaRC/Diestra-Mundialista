// Editor por hotel: el admin ve cada centro de consumo como header read-only
// con su lista de promociones debajo. Por cada centro puede AGREGAR /
// EDITAR / ELIMINAR promos. Cada promo se guarda individualmente para no
// arrastrar cambios pendientes de otra.
//
// Estado:
//   drafts[centroIdx].promos[] — copia local mutable. Los promos nuevos
//   llevan _isNew=true hasta que se guardan; ese flag los protege de ser
//   reemplazados cuando llega un snapshot fresco de Firestore.

import { useEffect, useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import {
  ArrowLeft, Calendar, Check, Flame, Loader2, LogOut,
  Plus, Save, Star, Trash2, UtensilsCrossed
} from 'lucide-react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../lib/firebase.js';
import { useAuth } from '../../hooks/useAuth.jsx';
import { useHotels } from '../../hooks/useHotels.js';
import { uniquePromoId } from '../../lib/slug.js';
import BilingualField from '../../components/admin/BilingualField.jsx';
import ImageUploadButton from '../../components/admin/ImageUploadButton.jsx';

function emptyPromo() {
  return {
    id: null,
    nombrePromocion: { es: '', en: '' },
    descuento: { es: '', en: '' },
    porcentaje: '',
    descripcionPromo: { es: '', en: '' },
    fechaHorarioPublicacion: '',
    portada: '',
    destacada: false,
    _isNew: true
  };
}

function toDatetimeLocal(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function fromDatetimeLocal(value) {
  if (!value) return '';
  return new Date(value).toISOString();
}

// Quita los campos de control local (_isNew) antes de persistir.
function toPersisted(promo, generatedId) {
  const { _isNew, id, ...rest } = promo;
  return { id: generatedId || id, ...rest };
}

export default function AdminHotelEditor() {
  const { id } = useParams();
  const { user, adminDoc, signOut } = useAuth();
  const { hoteles, loading: hotelsLoading } = useHotels();
  const hotel = hoteles.find((h) => h.id === id);
  const allowed = adminDoc?.hotelIds?.includes(id);

  // drafts[centroIdx] = { promos: [...] } — refleja lo de Firestore + los
  // nuevos locales (_isNew=true) que aún no se han guardado.
  const [drafts, setDrafts] = useState([]);
  // Por key 'ci:pi' — estado UI ephemeral.
  const [savingKey, setSavingKey] = useState(null);
  const [savedAt, setSavedAt] = useState({});
  const [errors, setErrors] = useState({});
  const [confirmingDelete, setConfirmingDelete] = useState(null); // 'ci:pi' o null

  useEffect(() => {
    if (!hotel) return;
    setDrafts((prev) => {
      return hotel.restaurantes.map((rest, ci) => {
        const localPromos = prev[ci]?.promos || [];
        const firestoreCopy = (rest.promos || []).map((p) => ({ ...p }));
        const firestoreIds = new Set(firestoreCopy.map((p) => p.id));
        // Una promo _isNew local sigue siendo "solo local" mientras Firestore
        // no la tenga todavía. Si ya tiene id y ese id ya viene en el snapshot,
        // significa que su save ya aterrizó — se descarta para no duplicar.
        const localOnly = localPromos.filter(
          (p) => p._isNew && (!p.id || !firestoreIds.has(p.id))
        );
        return { promos: [...firestoreCopy, ...localOnly] };
      });
    });
  }, [hotel]);

  if (!allowed) return <Navigate to="/admin" replace />;
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

  const keyOf = (ci, pi) => `${ci}:${pi}`;

  const updatePromo = (ci, pi, patch) => {
    setDrafts((prev) =>
      prev.map((centro, i) =>
        i === ci
          ? {
              ...centro,
              promos: centro.promos.map((p, j) => (j === pi ? { ...p, ...patch } : p))
            }
          : centro
      )
    );
    setErrors((e) => ({ ...e, [keyOf(ci, pi)]: undefined }));
    setSavedAt((s) => ({ ...s, [keyOf(ci, pi)]: undefined }));
  };

  const addPromo = (ci) => {
    setDrafts((prev) =>
      prev.map((centro, i) =>
        i === ci ? { ...centro, promos: [...centro.promos, emptyPromo()] } : centro
      )
    );
  };

  const removePromoLocal = (ci, pi) => {
    setDrafts((prev) =>
      prev.map((centro, i) =>
        i === ci ? { ...centro, promos: centro.promos.filter((_, j) => j !== pi) } : centro
      )
    );
    setConfirmingDelete(null);
  };

  // Persiste la lista de promos del centro `ci` a Firestore. Toma como base
  // lo que YA está en Firestore para los otros centros (no arrastra drafts
  // ajenos), y para este centro arma la lista a partir de los drafts EXCEPTO
  // los _isNew que no son la promo objetivo (para no persistir drafts a
  // medias de otras promos hermanas).
  const savePromo = async (ci, pi) => {
    const key = keyOf(ci, pi);
    const draft = drafts[ci]?.promos?.[pi];
    if (!draft) return;

    // Validación mínima: la promo debe tener un nombre (al menos en español)
    // para poder generar un id estable y ser útil al público.
    if (!draft.nombrePromocion?.es?.trim()) {
      setErrors((e) => ({ ...e, [key]: 'Pon al menos el nombre en español.' }));
      return;
    }

    // Calcular id final ANTES del await: el snapshot puede llegar mientras
    // updateDoc viaja, y el useEffect lo usa para deduplicar el draft local
    // contra la promo que aparece en Firestore.
    const restNow = hotel.restaurantes[ci];
    const existingFromFirestore = (restNow?.promos || []).map((p) => ({ ...p }));
    const otherIds = existingFromFirestore
      .filter((p) => p.id !== draft.id)
      .map((p) => p.id);
    const newId = draft.id || uniquePromoId(draft.nombrePromocion.es, otherIds);

    // Asigna el id al draft local (sigue _isNew=true hasta que confirmemos save).
    // Con el id puesto, cuando el snapshot llegue con esa promo, el filtro
    // del useEffect descartará este draft local y solo quedará la copia
    // proveniente de Firestore.
    setDrafts((prev) =>
      prev.map((centro, i) =>
        i === ci
          ? {
              ...centro,
              promos: centro.promos.map((p, j) =>
                j === pi ? { ...p, id: newId } : p
              )
            }
          : centro
      )
    );

    setSavingKey(key);
    setErrors((e) => ({ ...e, [key]: undefined }));
    try {
      const persisted = toPersisted(draft, newId);
      const newRestaurantes = hotel.restaurantes.map((rest, idx) => {
        if (idx !== ci) return rest;
        const existingPromos = (rest.promos || []).map((p) => ({ ...p }));
        const existingIdx = existingPromos.findIndex((p) => p.id === newId);
        if (existingIdx >= 0) {
          existingPromos[existingIdx] = persisted;
        } else {
          existingPromos.push(persisted);
        }
        return { ...rest, promos: existingPromos };
      });

      await updateDoc(doc(db, 'hoteles', hotel.id), { restaurantes: newRestaurantes });
      setSavedAt((s) => ({ ...s, [key]: Date.now() }));
    } catch (err) {
      console.error('[AdminHotelEditor] save failed:', err);
      setErrors((e) => ({ ...e, [key]: 'No se pudo guardar. Intenta de nuevo.' }));
    } finally {
      setSavingKey(null);
    }
  };

  // Eliminar persistido: actualiza Firestore quitando la promo del centro.
  const deletePromo = async (ci, pi) => {
    const key = keyOf(ci, pi);
    const draft = drafts[ci]?.promos?.[pi];
    if (!draft) return;

    // Si la promo es solo local (nunca guardada), basta con quitarla del draft.
    if (draft._isNew) {
      removePromoLocal(ci, pi);
      return;
    }

    setSavingKey(key);
    setErrors((e) => ({ ...e, [key]: undefined }));
    try {
      const newRestaurantes = hotel.restaurantes.map((rest, idx) => {
        if (idx !== ci) return rest;
        return {
          ...rest,
          promos: (rest.promos || []).filter((p) => p.id !== draft.id)
        };
      });
      await updateDoc(doc(db, 'hoteles', hotel.id), { restaurantes: newRestaurantes });
      // Local: useEffect rehidrata desde el snapshot fresco.
    } catch (err) {
      console.error('[AdminHotelEditor] delete failed:', err);
      setErrors((e) => ({ ...e, [key]: 'No se pudo eliminar. Intenta de nuevo.' }));
    } finally {
      setSavingKey(null);
      setConfirmingDelete(null);
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
          Cada centro de consumo puede tener 0, 1 o varias promociones activas. Solo se
          editan las promos; los datos base del centro (nombre, tipo de cocina, horarios)
          se mantienen tal cual.
        </p>

        {hotel.restaurantes.map((rest, ci) => {
          const promos = drafts[ci]?.promos || [];
          return (
            <section
              key={ci}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden"
            >
              <header className="bg-gray-50 border-b border-gray-200 px-4 md:px-6 py-3 flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Centro de consumo
                  </p>
                  <h2 className="font-bold text-gray-900 truncate">{rest.nombreCentroConsumo}</h2>
                  {rest.tipoCocina && (
                    <p className="text-[11px] text-gray-500 inline-flex items-center gap-1 mt-0.5">
                      <UtensilsCrossed size={11} />
                      {rest.tipoCocina.es}
                    </p>
                  )}
                </div>
                <span className="flex-shrink-0 text-[10px] bg-blue-50 text-blue-700 border border-blue-100 font-bold px-2.5 py-1 rounded-full">
                  {promos.length} {promos.length === 1 ? 'promo' : 'promos'}
                </span>
              </header>

              <div className="p-4 md:p-6 space-y-4">
                {promos.length === 0 && (
                  <p className="text-sm text-gray-400 italic text-center py-4">
                    Este centro no tiene promociones aún.
                  </p>
                )}

                {promos.map((promo, pi) => {
                  const key = keyOf(ci, pi);
                  const isSaving = savingKey === key;
                  const saved = savedAt[key];
                  const err = errors[key];
                  const showSaved = saved && Date.now() - saved < 4000;
                  const isConfirming = confirmingDelete === key;

                  return (
                    <article
                      key={promo.id || `new-${pi}`}
                      className={`rounded-xl border ${
                        promo._isNew ? 'border-blue-300 bg-blue-50/30' : 'border-gray-200 bg-white'
                      }`}
                    >
                      <header className="flex items-center justify-between gap-3 px-4 py-3 border-b border-gray-100">
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            Promoción {promo._isNew ? '(nueva — sin guardar)' : ''}
                          </p>
                          <p className="font-bold text-gray-900 text-sm truncate">
                            {promo.nombrePromocion?.es || 'Sin nombre'}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => updatePromo(ci, pi, { destacada: !promo.destacada })}
                          className={`flex-shrink-0 inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1.5 rounded-lg transition-colors ${
                            promo.destacada
                              ? 'bg-amber-100 text-amber-800 hover:bg-amber-200 border border-amber-300'
                              : 'bg-white text-gray-500 border border-gray-200 hover:border-amber-300 hover:text-amber-700'
                          }`}
                          title={promo.destacada ? 'Sale en el slider' : 'No sale en el slider'}
                        >
                          <Star size={13} className={promo.destacada ? 'fill-amber-500 text-amber-500' : ''} />
                          <span className="hidden sm:inline">
                            {promo.destacada ? 'Destacada' : 'Destacar'}
                          </span>
                        </button>
                        {isConfirming ? (
                          <div className="flex items-center gap-1 flex-shrink-0">
                            <button
                              type="button"
                              onClick={() => deletePromo(ci, pi)}
                              disabled={isSaving}
                              className="inline-flex items-center gap-1 text-xs bg-red-600 hover:bg-red-700 text-white font-bold px-2.5 py-1.5 rounded-lg"
                            >
                              <Trash2 size={13} />
                              {isSaving ? 'Borrando…' : 'Sí, borrar'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setConfirmingDelete(null)}
                              className="text-xs text-gray-500 hover:text-gray-700 font-bold px-2 py-1.5"
                            >
                              Cancelar
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmingDelete(key)}
                            className="flex-shrink-0 text-gray-400 hover:text-red-600 hover:bg-red-50 p-1.5 rounded-lg"
                            aria-label="Eliminar promoción"
                          >
                            <Trash2 size={15} />
                          </button>
                        )}
                      </header>

                      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                          <BilingualField
                            label="Nombre de la promoción"
                            value={promo.nombrePromocion}
                            onChange={(v) => updatePromo(ci, pi, { nombrePromocion: v })}
                            placeholder="Ej. Desayuno Campeones en la Bahía"
                          />
                        </div>

                        <BilingualField
                          label="Descuento (texto visible)"
                          value={promo.descuento}
                          onChange={(v) => updatePromo(ci, pi, { descuento: v })}
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
                              value={promo.porcentaje}
                              onChange={(e) => updatePromo(ci, pi, { porcentaje: e.target.value })}
                              placeholder="Ej. 15%"
                              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div className="md:col-span-2">
                          <BilingualField
                            label="Descripción larga de la promo"
                            value={promo.descripcionPromo}
                            onChange={(v) => updatePromo(ci, pi, { descripcionPromo: v })}
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
                              value={toDatetimeLocal(promo.fechaHorarioPublicacion)}
                              onChange={(e) =>
                                updatePromo(ci, pi, { fechaHorarioPublicacion: fromDatetimeLocal(e.target.value) })
                              }
                              className="w-full border border-gray-200 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-blue-500"
                            />
                          </div>
                        </div>

                        <div>
                          <ImageUploadButton
                            label="Portada de la promo (vertical)"
                            value={promo.portada}
                            onChange={(url) => updatePromo(ci, pi, { portada: url })}
                          />
                        </div>
                      </div>

                      <footer className="bg-gray-50 border-t border-gray-200 px-4 py-3 flex items-center justify-end gap-3">
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
                          onClick={() => savePromo(ci, pi)}
                          disabled={isSaving}
                          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-sm font-bold py-2 px-4 rounded-lg transition-colors"
                        >
                          <Save size={14} />
                          {isSaving ? 'Guardando…' : 'Guardar'}
                        </button>
                      </footer>
                    </article>
                  );
                })}

                <button
                  type="button"
                  onClick={() => addPromo(ci)}
                  className="w-full inline-flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 hover:border-blue-400 hover:text-blue-600 text-gray-500 font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  <Plus size={16} />
                  Agregar promoción a {rest.nombreCentroConsumo}
                </button>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}
