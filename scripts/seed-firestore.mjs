// Migra src/data/hoteles.js → Firestore una sola vez (idempotente: setDoc
// sobreescribe por id, así que puede correrse de nuevo si cambian los datos).
// También crea el doc admin para el usuario que ejecuta el script, dándole
// acceso a los 17 hoteles para validar el panel.
//
// Uso (PowerShell):
//   $env:ADMIN_EMAIL="corporativogpodiestra@gmail.com"
//   $env:ADMIN_PASSWORD="tu_password"
//   npm run seed:firestore
//
// Uso (Bash):
//   ADMIN_EMAIL=corporativogpodiestra@gmail.com ADMIN_PASSWORD=tu_password npm run seed:firestore
//
// Las VITE_FIREBASE_* vienen de .env.local cargado vía --env-file (ver package.json).

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, setDoc, writeBatch } from 'firebase/firestore';
import { hotelesDiestra } from '../src/data/hoteles.js';

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
  console.error('  PowerShell: $env:ADMIN_EMAIL="..."; $env:ADMIN_PASSWORD="..."; npm run seed:firestore');
  process.exit(1);
}

if (!firebaseConfig.apiKey) {
  console.error('✗ Falta config de Firebase. Revisa que .env.local tenga las variables VITE_FIREBASE_*');
  process.exit(1);
}

console.log('→ Inicializando Firebase...');
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

console.log(`→ Login como ${email}...`);
const userCred = await signInWithEmailAndPassword(auth, email, password);
const uid = userCred.user.uid;
console.log(`✓ Autenticado. UID: ${uid}`);

console.log(`→ Subiendo ${hotelesDiestra.length} hoteles a Firestore...`);
// writeBatch agrupa hasta 500 operaciones en una sola transacción atómica.
const batch = writeBatch(db);
for (const hotel of hotelesDiestra) {
  batch.set(doc(db, 'hoteles', hotel.id), hotel);
}
await batch.commit();
console.log(`✓ ${hotelesDiestra.length} hoteles escritos.`);

console.log('→ Creando doc admin con acceso a los 17 hoteles...');
const hotelIds = hotelesDiestra.map((h) => h.id);
await setDoc(doc(db, 'admins', uid), {
  email,
  hotelIds,
  createdAt: new Date().toISOString(),
  role: 'super' // marcador por si después agregamos roles
});
console.log(`✓ admin doc creado en admins/${uid}`);

console.log('');
console.log('🎉 Seed completo. Revisa la consola de Firestore para verificar.');
console.log(`   https://console.firebase.google.com/project/${firebaseConfig.projectId}/firestore/data`);

process.exit(0);
