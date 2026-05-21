// Utilidades para calcular el estado "Abierto / Cerrado" a partir del array
// de horarios que vive en cada centro de consumo:
//   [{ servicio: 'Desayuno', horario: '07:00 — 12:00' }, ...]
//
// Convención: cuando el horario es "HH:MM — 00:00", interpretamos 00:00 como
// medianoche del mismo día (24:00) — el negocio cierra al filo del día.

function parseTimeToMinutes(timeStr) {
  const [h, m] = timeStr.trim().split(':').map(Number);
  if (Number.isNaN(h) || Number.isNaN(m)) return null;
  return h * 60 + m;
}

function minutesToTime(minutes) {
  const norm = ((minutes % (24 * 60)) + 24 * 60) % (24 * 60);
  const h = String(Math.floor(norm / 60)).padStart(2, '0');
  const m = String(norm % 60).padStart(2, '0');
  return `${h}:${m}`;
}

function parseRange(rangeStr) {
  // Soporta em-dash —, en-dash – y guion -. Acepta espacios alrededor.
  const parts = rangeStr.split(/\s*[—–-]\s*/);
  if (parts.length !== 2) return null;
  const start = parseTimeToMinutes(parts[0]);
  let end = parseTimeToMinutes(parts[1]);
  if (start == null || end == null) return null;
  // Cierre a la medianoche o al día siguiente
  if (end <= start) end += 24 * 60;
  return { start, end };
}

function appliesToday(servicio, dayOfWeek) {
  // Normaliza: minúsculas, puntos a espacio, colapsa espacios.
  const s = (servicio || '')
    .toLowerCase()
    .replace(/\./g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

  // 1. Frases que significan "todos los días" — chequear primero porque
  //    "lunes a domingo" contiene "domingo" y dispararía el filtro de fin de semana.
  if (
    /\blun(es)?\s+a\s+dom(ingo)?\b/.test(s) ||
    /\btodos\s+los\s+d[íi]as\b/.test(s) ||
    /\bdiario\b/.test(s) ||
    /\bevery\s*day\b/.test(s) ||
    /\bdaily\b/.test(s)
  ) {
    return true;
  }

  // 2. Solo fin de semana. Usamos \b para no confundir "dom" con substring.
  if (
    /\bs[áa]b(ado)?s?\b/.test(s) ||
    /\bdom(ingo)?s?\b/.test(s) ||
    /\bfines?\s+de\s+semana\b/.test(s) ||
    /\bweekend\b/.test(s) ||
    /\b(sat|sun)(urday|day)?s?\b/.test(s)
  ) {
    return isWeekend;
  }

  // 3. Solo entre semana.
  if (
    /\blun(es)?\s+a\s+vier(nes)?\b/.test(s) ||
    /\bmon(day)?\s*(a|to|-)\s*fri(day)?\b/.test(s) ||
    /\bweekday\b/.test(s) ||
    /\bentre\s+semana\b/.test(s)
  ) {
    return !isWeekend;
  }

  // 4. Default: aplica todos los días (servicios genéricos como
  //    Desayuno, Comida, Cena, Terraza, Brunch sin día explícito, etc.).
  return true;
}

export function computeOpenStatus(horarios, now = new Date()) {
  if (!horarios || horarios.length === 0) return null;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const dayOfWeek = now.getDay();

  const todayRanges = horarios
    .filter((h) => appliesToday(h.servicio, dayOfWeek))
    .map((h) => {
      const r = parseRange(h.horario);
      return r ? { ...r, servicio: h.servicio } : null;
    })
    .filter(Boolean);

  for (const r of todayRanges) {
    if (nowMinutes >= r.start && nowMinutes < r.end) {
      return { open: true, until: minutesToTime(r.end) };
    }
  }

  const upcoming = todayRanges
    .filter((r) => r.start > nowMinutes)
    .sort((a, b) => a.start - b.start);

  if (upcoming.length > 0) {
    return { open: false, next: minutesToTime(upcoming[0].start) };
  }

  return { open: false };
}
