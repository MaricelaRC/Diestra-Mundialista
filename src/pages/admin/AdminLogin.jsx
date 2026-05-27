// Pantalla de login para admins. Si ya hay sesión, redirige a /admin.

import { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { LogIn, ShieldCheck } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function AdminLogin() {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectTo = location.state?.from || '/admin';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  // Si ya hay sesión, manda al admin
  useEffect(() => {
    if (user) navigate(redirectTo, { replace: true });
  }, [user, navigate, redirectTo]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await signIn(email.trim(), password);
      // navegación pasa por el useEffect cuando user cambia
    } catch (err) {
      console.error('[AdminLogin] login failed:', err);
      // Mensajes amigables para los errores comunes de Firebase Auth
      const code = err.code || '';
      if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) {
        setError('Email o contraseña incorrectos.');
      } else if (code.includes('too-many-requests')) {
        setError('Demasiados intentos. Espera unos minutos.');
      } else if (code.includes('network')) {
        setError('Sin conexión. Revisa tu internet.');
      } else {
        setError('No pudimos iniciar sesión. Intenta de nuevo.');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-600 text-white p-2 rounded-xl">
            <ShieldCheck size={24} />
          </div>
          <div>
            <h1 className="font-black text-gray-900 text-xl tracking-tight">Panel Diestra</h1>
            <p className="text-xs text-gray-500">Administración de promociones</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Correo</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="email"
              autoFocus
              className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </label>

          <label className="block">
            <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wide">Contraseña</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
              className="w-full mt-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </label>

          {error && (
            <p className="text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg p-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white font-bold py-3 rounded-xl shadow-sm transition-colors uppercase tracking-wider text-sm"
          >
            <LogIn size={16} />
            {submitting ? 'Iniciando sesión…' : 'Iniciar sesión'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <Link to="/" className="text-xs text-gray-500 hover:text-blue-600">
            ← Volver al sitio público
          </Link>
        </div>
      </div>
    </div>
  );
}
