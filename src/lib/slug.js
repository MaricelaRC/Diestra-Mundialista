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
