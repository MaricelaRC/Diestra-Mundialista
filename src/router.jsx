import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import Home from './pages/Home.jsx';
import HotelDetail from './pages/HotelDetail.jsx';
import PromoDetail from './pages/PromoDetail.jsx';
import MatchDetail from './pages/MatchDetail.jsx';
import Contacto from './pages/Contacto.jsx';
import Buscar from './pages/Buscar.jsx';
import NotFound from './pages/NotFound.jsx';

// Rutas admin: lazy-loaded para que el JS no impacte la app pública.
// Cuando un visitante normal abre /, Vite no carga estos chunks.
const AdminLogin = lazy(() => import('./pages/admin/AdminLogin.jsx'));
const AdminGuard = lazy(() => import('./pages/admin/AdminGuard.jsx'));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'));
const AdminHotelEditor = lazy(() => import('./pages/admin/AdminHotelEditor.jsx'));

function AdminFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center text-blue-600">
      <Loader2 size={32} className="animate-spin" />
    </div>
  );
}

const wrapAdmin = (element) => <Suspense fallback={<AdminFallback />}>{element}</Suspense>;

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/buscar', element: <Buscar /> },
  { path: '/hotel/:id', element: <HotelDetail /> },
  { path: '/promo/:hotelId/:promoId', element: <PromoDetail /> },
  { path: '/partido/:id', element: <MatchDetail /> },
  { path: '/contacto', element: <Contacto /> },

  // Admin
  { path: '/admin/login', element: wrapAdmin(<AdminLogin />) },
  {
    path: '/admin',
    element: wrapAdmin(<AdminGuard />),
    children: [
      { index: true, element: wrapAdmin(<AdminDashboard />) },
      { path: 'hotel/:id', element: wrapAdmin(<AdminHotelEditor />) }
    ]
  },

  { path: '*', element: <NotFound /> }
]);
