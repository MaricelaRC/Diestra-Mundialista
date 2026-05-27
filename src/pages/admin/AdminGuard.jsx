// Wrapper que protege rutas admin. Tres casos:
//  - loading: muestra spinner
//  - sin user: redirige a /admin/login con state.from para volver después
//  - user sin adminDoc: pantalla "no autorizado" (auth válida pero no es admin)
//  - user con adminDoc: renderiza children

import { Navigate, Outlet, useLocation, Link } from 'react-router-dom';
import { ShieldAlert, Loader2 } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth.jsx';

export default function AdminGuard() {
  const { user, adminDoc, loading, signOut } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-blue-600">
        <Loader2 size={32} className="animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location.pathname }} replace />;
  }

  if (!adminDoc) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-md text-center bg-white rounded-2xl shadow p-6">
          <div className="inline-flex bg-red-50 text-red-600 p-3 rounded-full mb-3">
            <ShieldAlert size={28} />
          </div>
          <h1 className="font-black text-gray-900 text-lg mb-2">Sin acceso al panel</h1>
          <p className="text-sm text-gray-600 mb-4">
            Tu cuenta ({user.email}) está autenticada pero no tiene permisos de administrador.
            Contacta al equipo de Diestra para que te asigne acceso a uno o más hoteles.
          </p>
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              onClick={signOut}
              className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold px-3 py-2 rounded-lg"
            >
              Cerrar sesión
            </button>
            <Link
              to="/"
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-bold px-3 py-2 rounded-lg"
            >
              Ir al sitio
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return <Outlet />;
}
