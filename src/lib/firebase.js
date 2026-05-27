// Inicialización centralizada de Firebase. Exporta singletons de Auth y
// Firestore que el resto de la app importa. Lee de import.meta.env (Vite).
//
// Si una variable VITE_FIREBASE_* falta en tiempo de build, Vite la deja
// como undefined y Firebase fallará al inicializar — eso es lo que queremos,
// para detectar problemas de config temprano.

import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported as analyticsSupported } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// initializeApp() lanza si se llama dos veces — protección por si el módulo
// se importa antes de tiempo durante HMR.
export const firebaseApp = getApps()[0] ?? initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);

// Analytics solo en browser que lo soporte (no en SSR/test); init asíncrono
// para no bloquear el primer render. Si falla, no rompe la app.
if (typeof window !== 'undefined' && firebaseConfig.measurementId) {
  analyticsSupported()
    .then((supported) => {
      if (supported) getAnalytics(firebaseApp);
    })
    .catch(() => {
      /* analytics opcional */
    });
}
