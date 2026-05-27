// 12 grupos placeholder para la pestaña de Tablas. Los equipos reales y los
// puntos vendrán de Firestore (poblado por la Cloud Function de Gemini).
// El sorteo oficial del Mundial 2026 ocurrió en diciembre de 2025; estos
// agrupamientos son aproximaciones para validar la UI.
// Bilingüe: `name` y `nombre` son { es, en }. Componentes leen con tr().

const g = (es, en, flag, pj, dg, pts, extra = {}) => ({
  name: { es, en },
  flag, pj, dg, pts, ...extra
});

const grupoNombre = (letter) => ({ es: `Grupo ${letter}`, en: `Group ${letter}` });

export const grupos = {
  A: {
    id: 'A', nombre: grupoNombre('A'), equipos: [
      g('México',       'Mexico',      '🇲🇽', 3, '+4', 7, { destacado: true }),
      g('Italia',       'Italy',       '🇮🇹', 3, '+2', 5),
      g('Camerún',      'Cameroon',    '🇨🇲', 3, '-1', 4),
      g('Nva. Zelanda', 'New Zealand', '🇳🇿', 3, '-5', 0, { eliminado: true })
    ]
  },
  B: {
    id: 'B', nombre: grupoNombre('B'), equipos: [
      g('Canadá',   'Canada',   '🇨🇦', 3, '+3', 7, { destacado: true }),
      g('Bélgica',  'Belgium',  '🇧🇪', 3, '+2', 6),
      g('Egipto',   'Egypt',    '🇪🇬', 3, '0',  3),
      g('Honduras', 'Honduras', '🇭🇳', 3, '-5', 1, { eliminado: true })
    ]
  },
  C: {
    id: 'C', nombre: grupoNombre('C'), equipos: [
      g('USA',       'USA',       '🇺🇸', 3, '+5', 9, { destacado: true }),
      g('España',    'Spain',     '🇪🇸', 3, '+3', 6),
      g('Marruecos', 'Morocco',   '🇲🇦', 3, '-2', 3),
      g('Australia', 'Australia', '🇦🇺', 3, '-6', 0, { eliminado: true })
    ]
  },
  D: {
    id: 'D', nombre: grupoNombre('D'), equipos: [
      g('Argentina',   'Argentina',  '🇦🇷', 3, '+6', 9, { destacado: true }),
      g('Croacia',     'Croatia',    '🇭🇷', 3, '+1', 4),
      g('Senegal',     'Senegal',    '🇸🇳', 3, '-2', 3),
      g('Costa Rica',  'Costa Rica', '🇨🇷', 3, '-5', 1, { eliminado: true })
    ]
  },
  E: {
    id: 'E', nombre: grupoNombre('E'), equipos: [
      g('Brasil',   'Brazil',   '🇧🇷', 3, '+5', 7, { destacado: true }),
      g('Portugal', 'Portugal', '🇵🇹', 3, '+2', 6),
      g('Ecuador',  'Ecuador',  '🇪🇨', 3, '-1', 4),
      g('Irán',     'Iran',     '🇮🇷', 3, '-6', 0, { eliminado: true })
    ]
  },
  F: {
    id: 'F', nombre: grupoNombre('F'), equipos: [
      g('Francia',    'France',       '🇫🇷', 3, '+4', 7, { destacado: true }),
      g('Polonia',    'Poland',       '🇵🇱', 3, '+1', 5),
      g('Sudáfrica',  'South Africa', '🇿🇦', 3, '-1', 3),
      g('Catar',      'Qatar',        '🇶🇦', 3, '-4', 1, { eliminado: true })
    ]
  },
  G: {
    id: 'G', nombre: grupoNombre('G'), equipos: [
      g('Inglaterra',      'England',      '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 3, '+4', 7, { destacado: true }),
      g('Países Bajos',    'Netherlands',  '🇳🇱', 3, '+2', 6),
      g('Nigeria',         'Nigeria',      '🇳🇬', 3, '-2', 3),
      g('Arabia Saudita',  'Saudi Arabia', '🇸🇦', 3, '-4', 1, { eliminado: true })
    ]
  },
  H: {
    id: 'H', nombre: grupoNombre('H'), equipos: [
      g('Alemania',      'Germany',     '🇩🇪', 3, '+5', 7, { destacado: true }),
      g('Uruguay',       'Uruguay',     '🇺🇾', 3, '+2', 6),
      g('Túnez',         'Tunisia',     '🇹🇳', 3, '-2', 3),
      g('Corea del Sur', 'South Korea', '🇰🇷', 3, '-5', 1, { eliminado: true })
    ]
  },
  I: {
    id: 'I', nombre: grupoNombre('I'), equipos: [
      g('Colombia',         'Colombia',    '🇨🇴', 3, '+3', 7, { destacado: true }),
      g('Suiza',            'Switzerland', '🇨🇭', 3, '+1', 5),
      g('Costa de Marfil',  'Ivory Coast', '🇨🇮', 3, '-1', 4),
      g('Japón',            'Japan',       '🇯🇵', 3, '-3', 1, { eliminado: true })
    ]
  },
  J: {
    id: 'J', nombre: grupoNombre('J'), equipos: [
      g('Chile',     'Chile',   '🇨🇱', 3, '+3', 6, { destacado: true }),
      g('Dinamarca', 'Denmark', '🇩🇰', 3, '+1', 6),
      g('Ghana',     'Ghana',   '🇬🇭', 3, '-1', 4),
      g('Panamá',    'Panama',  '🇵🇦', 3, '-3', 1, { eliminado: true })
    ]
  },
  K: {
    id: 'K', nombre: grupoNombre('K'), equipos: [
      g('Perú',        'Peru',        '🇵🇪', 3, '+2', 6, { destacado: true }),
      g('Suecia',      'Sweden',      '🇸🇪', 3, '+1', 6),
      g('Argelia',     'Algeria',     '🇩🇿', 3, '-1', 4),
      g('El Salvador', 'El Salvador', '🇸🇻', 3, '-2', 1, { eliminado: true })
    ]
  },
  L: {
    id: 'L', nombre: grupoNombre('L'), equipos: [
      g('Paraguay', 'Paraguay', '🇵🇾', 3, '+2', 6, { destacado: true }),
      g('Serbia',   'Serbia',   '🇷🇸', 3, '+1', 6),
      g('Mali',     'Mali',     '🇲🇱', 3, '-1', 4),
      g('Jamaica',  'Jamaica',  '🇯🇲', 3, '-2', 1, { eliminado: true })
    ]
  }
};

export const grupoIds = Object.keys(grupos);
