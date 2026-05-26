// Genera el OG image (1200x630) y favicon (256x256) a partir del logo.
// Ambos centran el logo sobre el color de marca (theme-color #1d4ed8).
//   npm run generate:og

import { writeFile, readFile } from 'node:fs/promises';
import sharp from 'sharp';

const LOGO = 'public/logo-diestra.png';
const BRAND = { r: 29, g: 78, b: 216 }; // #1d4ed8

const logoBuffer = await readFile(LOGO);

// --- OG image: 1200x630, logo escalado a ~50% del ancho, centrado ---
const ogLogo = await sharp(logoBuffer)
  .resize(600, null, { fit: 'inside', withoutEnlargement: false })
  .toBuffer();

await sharp({
  create: {
    width: 1200,
    height: 630,
    channels: 3,
    background: BRAND,
  },
})
  .composite([{ input: ogLogo, gravity: 'center' }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile('public/og-image.jpg');

console.log('✓ public/og-image.jpg (1200x630)');

// --- Favicon: 256x256 cuadrado, logo escalado al 75% del ancho ---
const faviconLogo = await sharp(logoBuffer)
  .resize(192, null, { fit: 'inside' })
  .toBuffer();

await sharp({
  create: {
    width: 256,
    height: 256,
    channels: 4,
    background: { ...BRAND, alpha: 1 },
  },
})
  .composite([{ input: faviconLogo, gravity: 'center' }])
  .png()
  .toFile('public/favicon.png');

console.log('✓ public/favicon.png (256x256)');
