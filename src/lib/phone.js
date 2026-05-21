// Formato y enlaces telefónicos para los centros de consumo.
// contacto se guarda como '+52XXXXXXXXXX'; extension es opcional.

const TWO_DIGIT_LADAS = ['55', '33', '81']; // CDMX, Guadalajara, Monterrey

// '+527444690505' -> '+52 744 469 0505'
export function formatPhone(contacto) {
  const digits = (contacto || '').replace(/\D/g, '');
  if (digits.startsWith('52') && digits.length === 12) {
    const n = digits.slice(2); // 10 dígitos locales
    if (TWO_DIGIT_LADAS.includes(n.slice(0, 2))) {
      return `+52 ${n.slice(0, 2)} ${n.slice(2, 6)} ${n.slice(6)}`;
    }
    return `+52 ${n.slice(0, 3)} ${n.slice(3, 6)} ${n.slice(6)}`;
  }
  return contacto || '';
}

// href tel: con extensión opcional. La coma inserta una pausa antes de
// marcar la extensión en el conmutador (estándar de facto en móviles).
export function buildTelHref(contacto, extension) {
  const base = (contacto || '').replace(/[^\d+]/g, '');
  return extension ? `tel:${base},${extension}` : `tel:${base}`;
}
