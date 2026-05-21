// Alineaciones placeholder para validar la UI. La fuente final será Firestore.
// Cada equipo respeta la misma estructura: portero + 4 defensas + 3 medios + 3 delanteros (4-3-3).

const team = (equipo, flag, delanteros, mediocampistas, defensas, portero) => ({
  equipo,
  flag,
  formacion: '4-3-3',
  delanteros,
  mediocampistas,
  defensas,
  portero
});

export const alineaciones = {
  mexico: team(
    'México', '🇲🇽',
    [
      { num: 11, nombre: 'J. Quiñones' },
      { num: 9,  nombre: 'S. Giménez' },
      { num: 22, nombre: 'H. Lozano' }
    ],
    [
      { num: 24, nombre: 'L. Chávez' },
      { num: 4,  nombre: 'E. Álvarez' },
      { num: 14, nombre: 'E. Sánchez' }
    ],
    [
      { num: 23, nombre: 'J. Gallardo' },
      { num: 5,  nombre: 'J. Vásquez' },
      { num: 3,  nombre: 'C. Montes' },
      { num: 2,  nombre: 'J. Sánchez' }
    ],
    { num: 1, nombre: 'L. Malagón' }
  ),
  argentina: team(
    'Argentina', '🇦🇷',
    [
      { num: 11, nombre: 'Di María' },
      { num: 9,  nombre: 'L. Martínez' },
      { num: 10, nombre: 'Messi' }
    ],
    [
      { num: 7,  nombre: 'De Paul' },
      { num: 5,  nombre: 'Mac Allister' },
      { num: 24, nombre: 'Enzo' }
    ],
    [
      { num: 8,  nombre: 'Acuña' },
      { num: 19, nombre: 'Otamendi' },
      { num: 13, nombre: 'C. Romero' },
      { num: 26, nombre: 'Molina' }
    ],
    { num: 23, nombre: 'D. Martínez' }
  ),
  brasil: team(
    'Brasil', '🇧🇷',
    [
      { num: 7,  nombre: 'Vinicius Jr.' },
      { num: 9,  nombre: 'Endrick' },
      { num: 11, nombre: 'Raphinha' }
    ],
    [
      { num: 5,  nombre: 'Casemiro' },
      { num: 17, nombre: 'B. Guimarães' },
      { num: 10, nombre: 'Rodrygo' }
    ],
    [
      { num: 6,  nombre: 'Wendell' },
      { num: 4,  nombre: 'Marquinhos' },
      { num: 3,  nombre: 'Militão' },
      { num: 2,  nombre: 'Danilo' }
    ],
    { num: 1, nombre: 'Alisson' }
  ),
  espana: team(
    'España', '🇪🇸',
    [
      { num: 19, nombre: 'Yamal' },
      { num: 7,  nombre: 'Morata' },
      { num: 17, nombre: 'N. Williams' }
    ],
    [
      { num: 20, nombre: 'Pedri' },
      { num: 16, nombre: 'Rodri' },
      { num: 10, nombre: 'D. Olmo' }
    ],
    [
      { num: 2,  nombre: 'Carvajal' },
      { num: 3,  nombre: 'Le Normand' },
      { num: 14, nombre: 'Laporte' },
      { num: 24, nombre: 'Cucurella' }
    ],
    { num: 23, nombre: 'Unai Simón' }
  ),
  francia: team(
    'Francia', '🇫🇷',
    [
      { num: 11, nombre: 'Dembélé' },
      { num: 9,  nombre: 'Giroud' },
      { num: 10, nombre: 'Mbappé' }
    ],
    [
      { num: 8,  nombre: 'Tchouaméni' },
      { num: 14, nombre: 'Rabiot' },
      { num: 7,  nombre: 'Griezmann' }
    ],
    [
      { num: 22, nombre: 'T. Hernández' },
      { num: 17, nombre: 'Saliba' },
      { num: 4,  nombre: 'Upamecano' },
      { num: 5,  nombre: 'Koundé' }
    ],
    { num: 16, nombre: 'Maignan' }
  )
};

export const equipoIds = Object.keys(alineaciones);
