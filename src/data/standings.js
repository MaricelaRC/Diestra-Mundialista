// 12 grupos placeholder para la pestaña de Tablas. Los equipos reales
// y los puntos vendrán de Firestore (poblado por la Cloud Function de Gemini).
// El sorteo oficial del Mundial 2026 ocurre en diciembre de 2025; estos
// agrupamientos son aproximaciones para validar la UI.

const g = (name, flag, pj, dg, pts, extra = {}) => ({ name, flag, pj, dg, pts, ...extra });

export const grupos = {
  A: {
    id: 'A', nombre: 'Grupo A', equipos: [
      g('México',       '🇲🇽', 3, '+4', 7, { destacado: true }),
      g('Italia',       '🇮🇹', 3, '+2', 5),
      g('Camerún',      '🇨🇲', 3, '-1', 4),
      g('Nva. Zelanda', '🇳🇿', 3, '-5', 0, { eliminado: true })
    ]
  },
  B: {
    id: 'B', nombre: 'Grupo B', equipos: [
      g('Canadá',   '🇨🇦', 3, '+3', 7, { destacado: true }),
      g('Bélgica',  '🇧🇪', 3, '+2', 6),
      g('Egipto',   '🇪🇬', 3, '0',  3),
      g('Honduras', '🇭🇳', 3, '-5', 1, { eliminado: true })
    ]
  },
  C: {
    id: 'C', nombre: 'Grupo C', equipos: [
      g('USA',       '🇺🇸', 3, '+5', 9, { destacado: true }),
      g('España',    '🇪🇸', 3, '+3', 6),
      g('Marruecos', '🇲🇦', 3, '-2', 3),
      g('Australia', '🇦🇺', 3, '-6', 0, { eliminado: true })
    ]
  },
  D: {
    id: 'D', nombre: 'Grupo D', equipos: [
      g('Argentina',   '🇦🇷', 3, '+6', 9, { destacado: true }),
      g('Croacia',     '🇭🇷', 3, '+1', 4),
      g('Senegal',     '🇸🇳', 3, '-2', 3),
      g('Costa Rica',  '🇨🇷', 3, '-5', 1, { eliminado: true })
    ]
  },
  E: {
    id: 'E', nombre: 'Grupo E', equipos: [
      g('Brasil',   '🇧🇷', 3, '+5', 7, { destacado: true }),
      g('Portugal', '🇵🇹', 3, '+2', 6),
      g('Ecuador',  '🇪🇨', 3, '-1', 4),
      g('Irán',     '🇮🇷', 3, '-6', 0, { eliminado: true })
    ]
  },
  F: {
    id: 'F', nombre: 'Grupo F', equipos: [
      g('Francia',    '🇫🇷', 3, '+4', 7, { destacado: true }),
      g('Polonia',    '🇵🇱', 3, '+1', 5),
      g('Sudáfrica',  '🇿🇦', 3, '-1', 3),
      g('Catar',      '🇶🇦', 3, '-4', 1, { eliminado: true })
    ]
  },
  G: {
    id: 'G', nombre: 'Grupo G', equipos: [
      g('Inglaterra',      '🏴󠁧󠁢󠁥󠁮󠁧󠁿', 3, '+4', 7, { destacado: true }),
      g('Países Bajos',    '🇳🇱', 3, '+2', 6),
      g('Nigeria',         '🇳🇬', 3, '-2', 3),
      g('Arabia Saudita',  '🇸🇦', 3, '-4', 1, { eliminado: true })
    ]
  },
  H: {
    id: 'H', nombre: 'Grupo H', equipos: [
      g('Alemania',     '🇩🇪', 3, '+5', 7, { destacado: true }),
      g('Uruguay',      '🇺🇾', 3, '+2', 6),
      g('Túnez',        '🇹🇳', 3, '-2', 3),
      g('Corea del Sur','🇰🇷', 3, '-5', 1, { eliminado: true })
    ]
  },
  I: {
    id: 'I', nombre: 'Grupo I', equipos: [
      g('Colombia',         '🇨🇴', 3, '+3', 7, { destacado: true }),
      g('Suiza',            '🇨🇭', 3, '+1', 5),
      g('Costa de Marfil',  '🇨🇮', 3, '-1', 4),
      g('Japón',            '🇯🇵', 3, '-3', 1, { eliminado: true })
    ]
  },
  J: {
    id: 'J', nombre: 'Grupo J', equipos: [
      g('Chile',     '🇨🇱', 3, '+3', 6, { destacado: true }),
      g('Dinamarca', '🇩🇰', 3, '+1', 6),
      g('Ghana',     '🇬🇭', 3, '-1', 4),
      g('Panamá',    '🇵🇦', 3, '-3', 1, { eliminado: true })
    ]
  },
  K: {
    id: 'K', nombre: 'Grupo K', equipos: [
      g('Perú',        '🇵🇪', 3, '+2', 6, { destacado: true }),
      g('Suecia',      '🇸🇪', 3, '+1', 6),
      g('Argelia',     '🇩🇿', 3, '-1', 4),
      g('El Salvador', '🇸🇻', 3, '-2', 1, { eliminado: true })
    ]
  },
  L: {
    id: 'L', nombre: 'Grupo L', equipos: [
      g('Paraguay', '🇵🇾', 3, '+2', 6, { destacado: true }),
      g('Serbia',   '🇷🇸', 3, '+1', 6),
      g('Mali',     '🇲🇱', 3, '-1', 4),
      g('Jamaica',  '🇯🇲', 3, '-2', 1, { eliminado: true })
    ]
  }
};

export const grupoIds = Object.keys(grupos);
