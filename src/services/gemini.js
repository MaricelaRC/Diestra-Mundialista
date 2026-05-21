// Stub temporal. En producción los partidos y noticias vienen de Firestore
// (poblado por una Cloud Function que llama a Gemini con la API key como secret).
// Mientras tanto devolvemos datos mock realistas para que la UI funcione
// sin exponer claves ni depender de la red.

const mockMatches = [
  {
    id: 'mex-ita-2026-06-11',
    home: 'México',
    away: 'Italia',
    date: '2026-06-11',
    time: '18:00',
    stadium: 'Estadio Azteca',
    city: 'Ciudad de México',
    status: 'Próximo'
  },
  {
    id: 'arg-bra-2026-06-12',
    home: 'Argentina',
    away: 'Brasil',
    date: '2026-06-12',
    time: '20:00',
    stadium: 'BBVA Stadium',
    city: 'Monterrey',
    status: 'Próximo'
  },
  {
    id: 'esp-ale-2026-06-13',
    home: 'España',
    away: 'Alemania',
    date: '2026-06-13',
    time: '16:00',
    stadium: 'Estadio Akron',
    city: 'Guadalajara',
    status: 'Próximo'
  },
  {
    id: 'fra-ing-2026-06-14',
    home: 'Francia',
    away: 'Inglaterra',
    date: '2026-06-14',
    time: '14:00',
    stadium: 'Estadio Pirata',
    city: 'Veracruz',
    status: 'En vivo'
  }
];

const mockNews = [
  {
    title: 'México alista alineación para el debut mundialista',
    source: 'ESPN',
    url: 'https://www.espn.com.mx/futbol/'
  },
  {
    title: 'Las sedes mexicanas confirmadas para la Copa del Mundo 2026',
    source: 'Mediotiempo',
    url: 'https://www.mediotiempo.com/'
  },
  {
    title: 'Grupo Diestra lanza experiencias gastronómicas para el Mundial',
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
