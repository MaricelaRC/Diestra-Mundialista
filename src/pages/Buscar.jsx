import { useEffect, useMemo, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, Search, MapPin, Flame, Calendar, Newspaper, UtensilsCrossed } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useHotels } from '../hooks/useHotels.js';
import { useWorldCupData } from '../hooks/useWorldCupData.js';
import { useTr } from '../lib/i18nData.js';

// Búsqueda bilingüe: si recibe { es, en }, concatena ambos para que el filtro
// haga match aunque el usuario esté en otro idioma. Arrays se concatenan también.
function norm(s) {
  if (s == null) return '';
  if (Array.isArray(s)) return s.map(norm).join(' ');
  if (typeof s === 'object') return [s.es, s.en].filter(Boolean).map(norm).join(' ');
  return s
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '');
}

// Devuelve dos listas: centros que matchean la búsqueda y promos que la
// matchean. Separadas porque enlazan a destinos distintos (/hotel vs /promo).
function buildResults(query, hotelList) {
  if (!query) return { hoteles: [], centros: [], promos: [] };
  const q = norm(query);

  const hoteles = hotelList.filter(
    (h) =>
      norm(h.name).includes(q) ||
      norm(h.ciudad).includes(q) ||
      norm(h.estado).includes(q) ||
      (h.zona && norm(h.zona).includes(q))
  );

  const centros = [];
  const promos = [];
  hotelList.forEach((h) => {
    (h.restaurantes || []).forEach((rest) => {
      const matchCentro =
        norm(rest.nombreCentroConsumo).includes(q) ||
        norm(rest.descripcionRestaurante).includes(q) ||
        norm(rest.tipoCocina).includes(q) ||
        norm(rest.especialidades).includes(q);
      if (matchCentro) {
        centros.push({ hotel: h, rest });
      }
      (rest.promos || []).forEach((promo) => {
        const matchPromo =
          norm(promo.nombrePromocion).includes(q) ||
          norm(promo.descuento).includes(q) ||
          norm(promo.descripcionPromo).includes(q);
        // Si el query también coincide con el centro, igual mostramos las
        // promos de ese centro como resultados de promos (mejor UX).
        if (matchPromo || matchCentro) {
          promos.push({ hotel: h, rest, promo });
        }
      });
    });
  });

  return { hoteles, centros, promos };
}

export default function Buscar() {
  const { t } = useTranslation();
  const { tr } = useTr();
  const { hoteles: hotelList } = useHotels();
  const [params, setParams] = useSearchParams();
  const query = params.get('q') || '';
  const inputRef = useRef(null);
  const { matches, news } = useWorldCupData();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(() => {
    const base = buildResults(query, hotelList);
    const q = norm(query);
    const partidos = q
      ? matches.filter(
          (m) =>
            norm(m.home).includes(q) ||
            norm(m.away).includes(q) ||
            norm(m.city).includes(q) ||
            norm(m.stadium).includes(q)
        )
      : [];
    const noticias = q
      ? news.filter((n) => norm(n.title).includes(q) || norm(n.source).includes(q))
      : [];
    return { ...base, partidos, noticias };
  }, [query, hotelList, matches, news]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) setParams({ q: value });
    else setParams({});
  };

  const hasQuery = query.trim().length > 0;
  const totalResults =
    results.hoteles.length +
    results.centros.length +
    results.promos.length +
    results.partidos.length +
    results.noticias.length;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <div className="max-w-md md:max-w-3xl lg:max-w-5xl mx-auto bg-white md:bg-transparent shadow-2xl md:shadow-none border-x md:border-x-0 border-gray-200 min-h-screen flex flex-col">
        <header className="sticky top-0 z-30 bg-white border-b border-gray-200 px-4 md:px-6 py-3 flex items-center gap-3">
          <Link
            to="/"
            className="p-1 text-gray-500 hover:text-blue-600"
            aria-label={t('contacto.volver')}
          >
            <ArrowLeft size={20} />
          </Link>
          <div className="flex-1 bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2 border border-gray-200/50">
            <Search size={16} className="text-gray-400" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={handleChange}
              placeholder={t('buscar.placeholder')}
              className="bg-transparent flex-1 text-sm focus:outline-none"
            />
          </div>
        </header>

        <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-6">
          {!hasQuery && (
            <div className="text-center py-16 text-gray-400">
              <Search size={32} className="mx-auto mb-3" />
              <p className="text-sm">{t('buscar.empty')}</p>
            </div>
          )}

          {hasQuery && totalResults === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p className="text-sm">{t('buscar.sinResultados', { q: query })}</p>
            </div>
          )}

          {results.hoteles.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('buscar.secciones.hoteles')} · {results.hoteles.length}
              </h2>
              <ul className="space-y-2">
                {results.hoteles.map((h) => (
                  <li key={h.id}>
                    <Link
                      to={`/hotel/${h.id}`}
                      className="block bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-3 transition-colors"
                    >
                      <p className="font-bold text-gray-900 text-sm">{h.name}</p>
                      <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                        <MapPin size={11} /> {h.ciudad}{h.zona ? ` · ${h.zona}` : ''}, {h.estado}
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.centros.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('buscar.secciones.centros')} · {results.centros.length}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.centros.map(({ hotel, rest }) => (
                  <li key={`${hotel.id}-${rest.nombreCentroConsumo}`}>
                    <Link
                      to={`/hotel/${hotel.id}`}
                      className="flex items-start gap-3 bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-3 transition-colors"
                    >
                      {rest.portada && (
                        <img
                          src={rest.portada}
                          alt=""
                          className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                          loading="lazy"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">
                          {hotel.name}
                        </p>
                        <p className="font-bold text-gray-900 text-sm truncate">
                          {rest.nombreCentroConsumo}
                        </p>
                        {rest.tipoCocina && (
                          <p className="text-[11px] text-gray-500 truncate mt-0.5 inline-flex items-center gap-1">
                            <UtensilsCrossed size={11} /> {tr(rest.tipoCocina)}
                          </p>
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.promos.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('buscar.secciones.promos')} · {results.promos.length}
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {results.promos.map(({ hotel, rest, promo }) => {
                  const thumb = promo.portada || rest.portada;
                  return (
                    <li key={`${hotel.id}-${promo.id}`}>
                      <Link
                        to={`/promo/${hotel.id}/${promo.id}`}
                        className="flex items-start gap-3 bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-3 transition-colors"
                      >
                        {thumb && (
                          <img
                            src={thumb}
                            alt=""
                            className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            loading="lazy"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] text-gray-400 uppercase tracking-wide truncate">
                            {hotel.name} · {rest.nombreCentroConsumo}
                          </p>
                          <p className="font-bold text-gray-900 text-sm truncate">
                            {tr(promo.nombrePromocion)}
                          </p>
                          {promo.porcentaje && (
                            <p className="text-[11px] text-amber-700 flex items-center gap-1 mt-0.5">
                              <Flame size={11} /> {promo.porcentaje} OFF · {tr(promo.descuento)}
                            </p>
                          )}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

          {results.partidos.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('buscar.secciones.partidos')} · {results.partidos.length}
              </h2>
              <ul className="space-y-2">
                {results.partidos.map((m) => (
                  <li key={m.id}>
                    <Link
                      to={`/partido/${m.id}`}
                      className="block bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-3 transition-colors"
                    >
                      <p className="text-[10px] text-gray-400 uppercase flex items-center gap-1">
                        <Calendar size={11} /> {m.date} · {m.time}
                      </p>
                      <p className="font-bold text-gray-900 text-sm mt-0.5">
                        {m.home} <span className="text-gray-300 italic mx-1">vs</span> {m.away}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">{m.stadium} · {m.city}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {results.noticias.length > 0 && (
            <section>
              <h2 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                {t('buscar.secciones.noticias')} · {results.noticias.length}
              </h2>
              <ul className="space-y-2">
                {results.noticias.map((n, i) => (
                  <li key={i}>
                    <a
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-3 transition-colors"
                    >
                      <p className="text-[10px] text-blue-600 uppercase font-bold flex items-center gap-1">
                        <Newspaper size={11} /> {n.source}
                      </p>
                      <p className="font-bold text-gray-900 text-sm mt-0.5">{n.title}</p>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
}
