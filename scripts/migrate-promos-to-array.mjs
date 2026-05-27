// Migra el modelo viejo (campos de promo embebidos en cada restaurante)
// al nuevo (restaurante.promos = [{ ... }]). Idempotente: si un
// restaurante ya tiene `promos` como array, se respeta tal cual.
//
// Transformación por restaurante:
//   - Si tiene `porcentaje` no vacío → genera 1 promo a partir de los 6
//     campos viejos y la pone en promos[0].
//   - Sin promo activa → promos = [].
//   - Borra los 6 campos viejos del restaurante (nombrePromocion,
//     descuento, porcentaje, descripcionPromo, fechaHorarioPublicacion,
//     destacada).
//   - `restaurante.portada` NO se toca — pasa a ser foto del centro.
//     La promo arranca con portada vacía; el admin sube la vertical real.
//
// También honra el seed curado de destacados.js: para cada entrada
// { hotelId, idx } pone `destacada=true` en la promo[0] del centro
// correspondiente (así el slider no arranca vacío post-migración).
//
// Uso (PowerShell):
//   $env:ADMIN_EMAIL = "..."
//   $env:ADMIN_PASSWORD = "..."
//   npm run migrate:promos

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, doc, writeBatch } from 'firebase/firestore';
import { destacados } from '../src/data/destacados.js';

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const email = process.env.ADMIN_EMAIL;
const password = process.env.ADMIN_PASSWORD;

if (!email || !password) {
  console.error('✗ Falta ADMIN_EMAIL o ADMIN_PASSWORD en el entorno.');
  process.exit(1);
}

if (!firebaseConfig.apiKey) {
  console.error('✗ Falta config de Firebase. Revisa que .env.local tenga las variables VITE_FIREBASE_*');
  process.exit(1);
}

function slugify(value) {
  if (!value) return '';
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .substring(0, 60);
}

// Quita los campos viejos de promo del objeto restaurante y devuelve uno nuevo.
function stripPromoFields(rest) {
  const {
    nombrePromocion,
    descuento,
    porcentaje,
    descripcionPromo,
    fechaHorarioPublicacion,
    destacada,
    ...keep
  } = rest;
  return keep;
}

function buildPromoFromOldFields(rest, fallbackIdx) {
  const promoIdBase = rest.nombrePromocion?.es || rest.nombrePromocion?.en || `promo-${fallbackIdx}`;
  return {
    id: slugify(promoIdBase) || `promo-${fallbackIdx}`,
    nombrePromocion: rest.nombrePromocion || { es: '', en: '' },
    descuento: rest.descuento || { es: '', en: '' },
    porcentaje: rest.porcentaje || '',
    descripcionPromo: rest.descripcionPromo || { es: '', en: '' },
    fechaHorarioPublicacion: rest.fechaHorarioPublicacion || '',
    portada: '', // vertical pendiente — la UI puede caer a restaurante.portada
    destacada: Boolean(rest.destacada)
  };
}

console.log('→ Inicializando Firebase...');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log(`→ Login como ${email}...`);
await signInWithEmailAndPassword(auth, email, password);
console.log('✓ Autenticado.');

console.log('→ Leyendo hoteles...');
const snap = await getDocs(collection(db, 'hoteles'));
console.log(`✓ ${snap.size} hoteles encontrados.`);

const destacadosByHotel = destacados.reduce((acc, { hotelId, idx }) => {
  acc[hotelId] = acc[hotelId] || new Set();
  acc[hotelId].add(idx);
  return acc;
}, {});

const batch = writeBatch(db);
let totalCentros = 0;
let centrosConPromoMigrados = 0;
let centrosYaMigrados = 0;
let promosDestacadasSeeded = 0;

for (const docSnap of snap.docs) {
  const hotel = docSnap.data();
  const restaurantes = (hotel.restaurantes || []).map((rest, centroIdx) => {
    totalCentros++;

    if (Array.isArray(rest.promos)) {
      centrosYaMigrados++;
      return rest;
    }

    const tienePromoVieja = rest.porcentaje && String(rest.porcentaje).trim() !== '';
    const promos = tienePromoVieja ? [buildPromoFromOldFields(rest, centroIdx)] : [];

    // Seed de destacadas desde destacados.js — si este centro está en la
    // lista curada y se creó una promo, marca esa promo como destacada.
    if (promos.length > 0 && destacadosByHotel[hotel.id]?.has(centroIdx)) {
      promos[0].destacada = true;
      promosDestacadasSeeded++;
    }

    if (tienePromoVieja) centrosConPromoMigrados++;

    const cleaned = stripPromoFields(rest);
    cleaned.promos = promos;
    return cleaned;
  });

  batch.update(doc(db, 'hoteles', hotel.id), { restaurantes });
}

console.log('→ Aplicando cambios en batch...');
await batch.commit();
console.log('✓ Migración aplicada.');
console.log('');
console.log(`  Hoteles procesados:           ${snap.size}`);
console.log(`  Centros totales:              ${totalCentros}`);
console.log(`  Centros ya migrados (skip):   ${centrosYaMigrados}`);
console.log(`  Centros con promo migrada:    ${centrosConPromoMigrados}`);
console.log(`  Promos destacadas (seed):     ${promosDestacadasSeeded}`);
console.log('');
console.log('🎉 Listo. Revisa la consola de Firestore para verificar.');

process.exit(0);
