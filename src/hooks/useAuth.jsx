// AuthContext: estado de Firebase Auth + doc admin asociado. Se monta una
// sola vez en main.jsx con <AuthProvider> y cualquier componente lo lee con
// useAuth(). Para no romper la app pública (que no necesita auth), el
// provider no bloquea el render — los hijos pueden empezar sin user y
// renderizar mientras se hidrata.

import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as fbSignOut
} from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../lib/firebase.js';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [adminDoc, setAdminDoc] = useState(null);
  const [loading, setLoading] = useState(true);

  // Suscripción al estado de auth: dispara cuando hay login/logout.
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      // adminDoc se carga en el siguiente efecto cuando user cambia
      if (!u) {
        setAdminDoc(null);
        setLoading(false);
      }
    });
    return unsub;
  }, []);

  // Cuando hay user, suscríbete a su doc admin para conocer sus permisos.
  // Si el doc no existe (user autenticado pero no es admin), adminDoc = null.
  useEffect(() => {
    if (!user) return;
    setLoading(true);
    const unsub = onSnapshot(
      doc(db, 'admins', user.uid),
      (snap) => {
        setAdminDoc(snap.exists() ? snap.data() : null);
        setLoading(false);
      },
      (err) => {
        console.error('[useAuth] error leyendo admin doc:', err);
        setAdminDoc(null);
        setLoading(false);
      }
    );
    return unsub;
  }, [user]);

  const signIn = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const signOut = () => fbSignOut(auth);

  const value = { user, adminDoc, loading, signIn, signOut };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth debe usarse dentro de <AuthProvider>');
  return ctx;
}
