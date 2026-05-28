// Helpers de id para promos. Las promos viven en restaurantes[X].promos[],
// así que los ids solo necesitan ser únicos dentro de ese array — no
// globales — y se usan en URLs (/promo/:hotelId/:promoId).

export function slugify(value) {
  if (!value) return '';
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// Devuelve un slug único contra una lista de ids ya tomados; si colisiona,
// agrega -2, -3, etc.
export function uniquePromoId(base, existingIds = []) {
  const slug = slugify(base) || 'promo';
  if (!existingIds.includes(slug)) return slug;
  let i = 2;
  while (existingIds.includes(`${slug}-${i}`)) i++;
  return `${slug}-${i}`;
}

// Slug de un centro de consumo dentro de un hotel — usado en URLs
// /hotel/:hotelId/centro/:centroSlug. Si hay nombres colisionando, se
// agrega -2, -3 según la posición del centro en hotel.restaurantes[].
export function centroSlug(restaurantes, idx) {
  const target = restaurantes?.[idx];
  if (!target) return '';
  const base = slugify(target.nombreCentroConsumo) || 'centro';
  let position = 0;
  for (let i = 0; i < idx; i++) {
    if (slugify(restaurantes[i]?.nombreCentroConsumo) === base) position++;
  }
  return position === 0 ? base : `${base}-${position + 1}`;
}

// Inverso: dado un slug, devuelve el índice del centro en restaurantes[] o -1.
export function findCentroIdxBySlug(restaurantes, slug) {
  if (!restaurantes || !slug) return -1;
  for (let i = 0; i < restaurantes.length; i++) {
    if (centroSlug(restaurantes, i) === slug) return i;
  }
  return -1;
}
