import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home.jsx';
import HotelDetail from './pages/HotelDetail.jsx';
import PromoDetail from './pages/PromoDetail.jsx';
import MatchDetail from './pages/MatchDetail.jsx';
import Contacto from './pages/Contacto.jsx';
import Buscar from './pages/Buscar.jsx';
import NotFound from './pages/NotFound.jsx';

export const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/buscar', element: <Buscar /> },
  { path: '/hotel/:id', element: <HotelDetail /> },
  { path: '/promo/:hotelId/:idx', element: <PromoDetail /> },
  { path: '/partido/:id', element: <MatchDetail /> },
  { path: '/contacto', element: <Contacto /> },
  { path: '*', element: <NotFound /> }
]);
