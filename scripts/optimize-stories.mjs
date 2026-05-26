// Comprime las imágenes del carrusel de stories a 240x240 con calidad 80.
// Se muestran a 64-80px en pantalla, 240px cubre retina x3. Sobreescribe
// los originales. Correr cada vez que se agreguen imágenes nuevas.
//   npm run optimize:stories

import { readdir, readFile, writeFile, stat } from 'node:fs/promises';
import { join } from 'node:path';
import sharp from 'sharp';

const DIR = 'public/stories';
const SIZE = 240;
const QUALITY = 80;

const files = (await readdir(DIR)).filter((f) => /\.(jpe?g|png)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of files) {
  const path = join(DIR, file);
  const before = (await stat(path)).size;
  totalBefore += before;

  const input = await readFile(path);

  const output = await sharp(input)
    .resize(SIZE, SIZE, { fit: 'cover', position: 'center' })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  await writeFile(path, output);

  totalAfter += output.length;
  const pct = Math.round((1 - output.length / before) * 100);
  console.log(`${file.padEnd(28)} ${(before / 1024).toFixed(0).padStart(4)} KB → ${(output.length / 1024).toFixed(0).padStart(3)} KB  (-${pct}%)`);
}

console.log('─'.repeat(60));
console.log(`TOTAL: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB`);
