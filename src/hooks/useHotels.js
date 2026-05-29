// Lee la colección `hoteles` de Firestore en tiempo real. Cuando un admin
// guarda cambios, los suscriptores de este hook reciben el snapshot nuevo
// dentro de ~1s y la UI se actualiza sin recargar.
//
// Para que no haya blink en el primer paint, devolvemos hotelesDiestra
// (catálogo estático) como valor inicial. Si Firestore responde con datos
// reales los reemplaza; si falla la conexión, la app sigue funcionando con
// el catálogo local.

import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase.js';
import { hotelesDiestra as initialHoteles } from '../data/hoteles.js';

// Mapa id → orden, para preservar el orden curado del catálogo local
// (Firestore devuelve docs en orden alfabético arbitrario).
const orderById = new Map(initialHoteles.map((h, i) => [h.id, i]));

// Mapa id → hotel local. Usado para inyectar assets de presentación
// (coverImg) que viven en el repo y no en Firestore: el admin editor
// no los expone y no queremos que sean editables.
const localById = new Map(initialHoteles.map((h) => [h.id, h]));

export function useHotels() {
  const [hoteles, setHoteles] = useState(initialHoteles);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'hoteles'),
      (snap) => {
        const list = snap.docs.map((d) => {
          const remote = d.data();
          const local = localById.get(remote.id);
          return { ...remote, coverImg: remote.coverImg || local?.coverImg };
        });
        const ordered = [...list].sort((a, b) => {
          const ai = orderById.get(a.id) ?? 999;
          const bi = orderById.get(b.id) ?? 999;
          return ai - bi;
        });
        setHoteles(ordered);
        setLoading(false);
      },
      (err) => {
        console.error('[useHotels] Firestore error, manteniendo data local:', err);
        setError(err);
        setLoading(false);
      }
    );
    return unsub;
  }, []);

  return { hoteles, loading, error };
}
