// Stub temporal. En producción los partidos y noticias vienen de Firestore
// (poblado por una Cloud Function que llama a Gemini con la API key como secret).
// Mientras tanto devolvemos datos mock realistas para que la UI funcione
// sin exponer claves ni depender de la red.

// Nombres bilingües para los países que aparecen en partidos. Centralizado
// para no repetir literales y mantener consistencia con standings.js.
const T = {
  mexico:       { es: 'México',           en: 'Mexico' },
  italia:       { es: 'Italia',           en: 'Italy' },
  camerun:      { es: 'Camerún',          en: 'Cameroon' },
  nzl:          { es: 'Nueva Zelanda',    en: 'New Zealand' },
  espana:       { es: 'España',           en: 'Spain' },
  marruecos:    { es: 'Marruecos',        en: 'Morocco' },
  usa:          { es: 'USA',              en: 'USA' },
  australia:    { es: 'Australia',        en: 'Australia' },
  argentina:    { es: 'Argentina',        en: 'Argentina' },
  croacia:      { es: 'Croacia',          en: 'Croatia' },
  brasil:       { es: 'Brasil',           en: 'Brazil' },
  portugal:     { es: 'Portugal',         en: 'Portugal' },
  paisesBajos:  { es: 'Países Bajos',     en: 'Netherlands' },
  nigeria:      { es: 'Nigeria',          en: 'Nigeria' },
  tbd:          { es: 'Por confirmar',    en: 'TBD' }
};

// 13 partidos plausibles en las 3 sedes mexicanas confirmadas por FIFA:
// Estadio Azteca (CDMX, 5), Estadio Akron (Guadalajara, 4) y Estadio BBVA
// (Monterrey, 4). Status como código ('upcoming' | 'live' | 'finished') que
// los componentes traducen con i18n. Emparejamientos consistentes con los
// grupos en src/data/standings.js.
const mockMatches = [
  // — Estadio Azteca (CDMX) —
  { id: 'mex-ita-2026-06-11', home: T.mexico,  away: T.italia,    date: '2026-06-11', time: '18:00', stadium: 'Estadio Azteca', city: 'Ciudad de México', status: 'upcoming' },
  { id: 'cam-nzl-2026-06-17', home: T.camerun, away: T.nzl,       date: '2026-06-17', time: '14:00', stadium: 'Estadio Azteca', city: 'Ciudad de México', status: 'upcoming' },
  { id: 'mex-nzl-2026-06-22', home: T.mexico,  away: T.nzl,       date: '2026-06-22', time: '16:00', stadium: 'Estadio Azteca', city: 'Ciudad de México', status: 'upcoming' },
  { id: 'r16-azt-2026-06-28', home: T.tbd,     away: T.tbd,       date: '2026-06-28', time: '14:00', stadium: 'Estadio Azteca', city: 'Ciudad de México', status: 'upcoming' },
  { id: 'qf-azt-2026-07-04',  home: T.tbd,     away: T.tbd,       date: '2026-07-04', time: '16:00', stadium: 'Estadio Azteca', city: 'Ciudad de México', status: 'upcoming' },

  // — Estadio Akron (Guadalajara) —
  { id: 'esp-mar-2026-06-13', home: T.espana,  away: T.marruecos, date: '2026-06-13', time: '12:00', stadium: 'Estadio Akron',  city: 'Guadalajara',       status: 'upcoming' },
  { id: 'usa-aus-2026-06-18', home: T.usa,     away: T.australia, date: '2026-06-18', time: '17:00', stadium: 'Estadio Akron',  city: 'Guadalajara',       status: 'upcoming' },
  { id: 'ita-cam-2026-06-23', home: T.italia,  away: T.camerun,   date: '2026-06-23', time: '16:00', stadium: 'Estadio Akron',  city: 'Guadalajara',       status: 'upcoming' },
  { id: 'r16-akr-2026-06-30', home: T.tbd,     away: T.tbd,       date: '2026-06-30', time: '16:00', stadium: 'Estadio Akron',  city: 'Guadalajara',       status: 'upcoming' },

  // — Estadio BBVA (Monterrey) —
  { id: 'arg-cro-2026-06-16', home: T.argentina,   away: T.croacia,  date: '2026-06-16', time: '20:00', stadium: 'Estadio BBVA', city: 'Monterrey', status: 'upcoming' },
  { id: 'bra-por-2026-06-21', home: T.brasil,      away: T.portugal, date: '2026-06-21', time: '17:00', stadium: 'Estadio BBVA', city: 'Monterrey', status: 'upcoming' },
  { id: 'ned-nig-2026-06-25', home: T.paisesBajos, away: T.nigeria,  date: '2026-06-25', time: '20:00', stadium: 'Estadio BBVA', city: 'Monterrey', status: 'upcoming' },
  { id: 'r16-bbv-2026-07-02', home: T.tbd,         away: T.tbd,      date: '2026-07-02', time: '20:00', stadium: 'Estadio BBVA', city: 'Monterrey', status: 'upcoming' }
];

// Noticias curadas mientras llega la Cloud Function con Gemini. Los títulos
// se mantienen bilingües { es, en } igual que el catálogo de hoteles.
const mockNews = [
  {
    title: {
      es: 'México alista alineación para el debut futbolero',
      en: 'Mexico finalizes lineup for its tournament opener'
    },
    source: 'ESPN',
    url: 'https://www.espn.com.mx/futbol/'
  },
  {
    title: {
      es: 'Confirman horarios completos de los 13 partidos en sedes mexicanas',
      en: 'Organizers confirm full schedule for the 13 matches at Mexican venues'
    },
    source: 'Récord',
    url: 'https://www.record.com.mx/'
  },
  {
    title: {
      es: 'Estadio Azteca: así será la ceremonia de inauguración del torneo 2026',
      en: 'Estadio Azteca: what to expect from the 2026 tournament opening ceremony'
    },
    source: 'Marca',
    url: 'https://www.marca.com/'
  },
  {
    title: {
      es: 'Las sedes mexicanas confirmadas para el torneo 2026',
      en: 'Confirmed Mexican host cities for the 2026 tournament'
    },
    source: 'Mediotiempo',
    url: 'https://www.mediotiempo.com/'
  },
  {
    title: {
      es: 'Guía gastronómica del torneo: qué probar en cada sede mexicana',
      en: 'Tournament food guide: what to try in each Mexican host city'
    },
    source: 'El Universal',
    url: 'https://www.eluniversal.com.mx/'
  },
  {
    title: {
      es: 'Grupo Diestra lanza experiencias gastronómicas para el torneo',
      en: 'Grupo Diestra unveils dining experiences for the tournament'
    },
    source: 'Diestra Press',
    url: 'https://www.hotelesemporio.com/'
  }
];

export async function fetchWorldCupData() {
  await new Promise((resolve) => setTimeout(resolve, 400));
  return { matches: mockMatches, news: mockNews };
}

export function findMatchById(id) {
  return mockMatches.find((m) => m.id === id) || null;
}
