// Resuelve campos del catálogo que pueden venir como string plano (legacy)
// o como { es, en } (bilingüe). Si falta el idioma pedido, hace fallback a
// español, y si no hay nada devuelve string vacío.
//
//   tr(rest.descripcionPromo, 'en')
//   tr(['a', 'b'], 'en')   ← para arrays también, ver trArray
export function tr(field, lang) {
  if (field == null) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') return field[lang] ?? field.es ?? '';
  return String(field);
}

// Para arrays bilingües como especialidades: { es: [...], en: [...] } o [...]
export function trArray(field, lang) {
  if (!field) return [];
  if (Array.isArray(field)) return field;
  if (typeof field === 'object') return field[lang] ?? field.es ?? [];
  return [];
}

// Hook conveniente para componentes con useTranslation ya cargado.
import { useTranslation } from 'react-i18next';
export function useTr() {
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith('en') ? 'en' : 'es';
  return {
    tr: (field) => tr(field, lang),
    trArray: (field) => trArray(field, lang),
    lang,
  };
}
