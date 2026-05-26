import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, MapPin, Pause, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { hotelesDiestra } from '../data/hoteles.js';
import { destacados } from '../data/destacados.js';
import { useTr } from '../lib/i18nData.js';

const AUTO_INTERVAL_MS = 5000;
const SWIPE_THRESHOLD_PX = 40;

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
  const { tr } = useTr();
  const slides = resolveSlides();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timer.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTO_INTERVAL_MS);
    return () => clearInterval(timer.current);
  }, [paused, slides.length]);

  if (slides.length === 0) return null;

  // Cualquier navegación manual pausa el auto-avance; el usuario lo reanuda con play.
  const goTo = (i) => {
    setPaused(true);
    setCurrent((i + slides.length) % slides.length);
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > SWIPE_THRESHOLD_PX) {
      goTo(current + (delta < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md" aria-roledescription="carousel">
      <div
        className="relative h-48 md:h-72 lg:h-80 bg-gray-200"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map(({ hotel, rest, idx }) => (
            <Link
              key={`${hotel.id}-${idx}`}
              to={`/promo/${hotel.id}/${idx}`}
              className="relative w-full h-full flex-shrink-0"
              aria-label={`${tr(rest.nombrePromocion)} · ${hotel.name}`}
            >
              <img
                src={rest.portada}
                alt={tr(rest.nombrePromocion)}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 pb-12 md:p-6 md:pb-14 text-white">
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
                  {tr(rest.nombrePromocion)}
                </h3>
                <p className="text-xs md:text-sm opacity-95 mt-1 line-clamp-1 md:line-clamp-2 drop-shadow">
                  {tr(rest.descuento)}
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
            onClick={() => setPaused((p) => !p)}
            className="absolute top-2 right-2 md:top-3 md:right-3 bg-white/80 hover:bg-white active:scale-90 rounded-full p-1.5 shadow-md transition-all"
            aria-label={paused ? t('a11y.play') : t('a11y.pause')}
          >
            {paused ? <Play size={14} /> : <Pause size={14} />}
          </button>

          <div className="absolute bottom-2 inset-x-2 md:inset-x-3 flex items-center justify-between gap-2">
            <button
              type="button"
              onClick={() => goTo(current - 1)}
              className="bg-white/80 hover:bg-white active:scale-90 rounded-full p-1.5 shadow-md transition-all"
              aria-label={t('a11y.prev')}
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={t('a11y.gotoSlide', { n: i + 1 })}
                  className={`h-1.5 rounded-full transition-all ${
                    i === current ? 'w-6 bg-white' : 'w-1.5 bg-white/60 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => goTo(current + 1)}
              className="bg-white/80 hover:bg-white active:scale-90 rounded-full p-1.5 shadow-md transition-all"
              aria-label={t('a11y.next')}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
