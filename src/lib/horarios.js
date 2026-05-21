// Utilidades para calcular el estado "Abierto / Cerrado" a partir del array
// de horarios que vive en cada centro de consumo:
//   [{ servicio: 'Desayuno', horario: '07:00 — 12:00', dias: [1,2,3,4,5] }, ...]
//
// `dias` es opcional: números de día de la semana (0=domingo .. 6=sábado).
// Si no se especifica, el servicio aplica todos los días.
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

function appliesToday(horario, dayOfWeek) {
  // Si el horario no trae `dias`, aplica todos los días.
  return !horario.dias || horario.dias.includes(dayOfWeek);
}

export function computeOpenStatus(horarios, now = new Date()) {
  if (!horarios || horarios.length === 0) return null;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  const dayOfWeek = now.getDay();

  const todayRanges = horarios
    .filter((h) => appliesToday(h, dayOfWeek))
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
