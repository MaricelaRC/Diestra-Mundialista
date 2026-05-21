import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { hotelesDiestra } from '../data/hoteles.js';
import { destacados } from '../data/destacados.js';

const AUTO_INTERVAL_MS = 5000;

function resolveSlides() {
  // El banner solo muestra centros con promoción activa.
  return destacados
    .map(({ hotelId, idx }) => {
      const hotel = hotelesDiestra.find((h) => h.id === hotelId);
      const rest = hotel?.restaurantes?.[idx];
      if (!hotel || !rest || !rest.porcentaje) return null;
      return { hotel, rest, idx };
    })
    .filter(Boolean);
}

export default function PromoBanner() {
  const { t } = useTranslation();
  const slides = resolveSlides();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer.current);
  }, [paused, slides.length]);

  if (slides.length === 0) return null;

  const goTo = (i) => setCurrent((i + slides.length) % slides.length);

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-md group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <div className="relative h-48 md:h-72 lg:h-80 bg-gray-200">
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map(({ hotel, rest, idx }) => (
            <Link
              key={`${hotel.id}-${idx}`}
              to={`/promo/${hotel.id}/${idx}`}
              className="relative w-full h-full flex-shrink-0"
              aria-label={`${rest.nombrePromocion} · ${hotel.name}`}
            >
              <img
                src={rest.portada}
                alt={rest.nombrePromocion}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 pb-9 md:p-6 md:pb-12 text-white">
                <div className="flex flex-wrap items-center gap-1.5 md:gap-2 mb-2">
                  <span className="inline-flex items-center bg-red-600 text-white text-[10px] md:text-xs font-black px-2.5 py-1 rounded-full shadow-md tracking-wide">
                    {rest.porcentaje} {t('alimentos.off')}
                  </span>
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full border border-white/30 shadow-md tracking-wide">
                    <MapPin size={11} className="opacity-90" />
                    {hotel.name}
                  </span>
                </div>
                <h3 className="font-black text-base md:text-2xl tracking-tight drop-shadow-lg leading-tight">
                  {rest.nombrePromocion}
                </h3>
                <p className="text-xs md:text-sm opacity-95 mt-1 line-clamp-1 md:line-clamp-2 drop-shadow">
                  {rest.descuento}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(current - 1)}
            className="hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Anterior"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => goTo(current + 1)}
            className="hidden md:flex absolute top-1/2 right-3 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Siguiente"
          >
            <ChevronRight size={18} />
          </button>

          <div className="absolute bottom-3 inset-x-0 flex justify-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Ir al slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
