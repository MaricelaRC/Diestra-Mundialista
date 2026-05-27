// Subida de imágenes a Cloudinary vía upload preset 'Unsigned' (no requiere
// API Secret en el frontend). El admin selecciona un File del input, llamamos
// a esta función y guardamos la `secure_url` resultante en Firestore.
//
// Cloudinary devuelve también `public_id`, `width`, `height`, etc.; si en el
// futuro queremos generar transformaciones (resize, formato) podemos derivar
// URLs a partir del public_id sin re-subir.

const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const UPLOAD_ENDPOINT = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

/**
 * Sube una imagen a Cloudinary y devuelve la URL pública.
 * @param {File} file — input file desde un <input type="file">
 * @returns {Promise<{ url: string, publicId: string, width: number, height: number }>}
 */
export async function uploadImage(file) {
  if (!CLOUD_NAME || !UPLOAD_PRESET) {
    throw new Error('Cloudinary no está configurado (revisa .env.local)');
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(UPLOAD_ENDPOINT, { method: 'POST', body: formData });
  if (!res.ok) {
    const errorBody = await res.text().catch(() => '');
    throw new Error(`Cloudinary respondió ${res.status}: ${errorBody}`);
  }

  const data = await res.json();
  return {
    url: data.secure_url,
    publicId: data.public_id,
    width: data.width,
    height: data.height
  };
}
