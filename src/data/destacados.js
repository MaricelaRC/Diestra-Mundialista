// 4 promos destacadas para el banner rotativo. Referencian un hotel y el
// índice de su centro de consumo dentro de hoteles.js. Cuando se migre a
// Firestore se cambia a referencias por docId.

export const destacados = [
  { hotelId: 'e-veracruz',         idx: 2 }, // Sky Bar Emporio · Terraza Mundialista
  { hotelId: 'e-acapulco',         idx: 1 }, // Sunset Grill · Sunset & Soccer Party
  { hotelId: 'm-reforma',          idx: 1 }, // La Mansión Reforma · Corte & Cerveza
  { hotelId: 'renaissance-cancun', idx: 0 }  // Káajal Restaurante · Sunset Margaritas
];
