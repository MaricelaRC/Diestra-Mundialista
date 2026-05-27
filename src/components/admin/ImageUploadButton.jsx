// Botón que abre el selector de archivos, sube a Cloudinary y devuelve la
// URL via onUploaded. Muestra preview si ya hay valor; permite reemplazar.

import { useRef, useState } from 'react';
import { Upload, Image as ImageIcon, X } from 'lucide-react';
import { uploadImage } from '../../lib/cloudinary.js';

export default function ImageUploadButton({ value, onChange, label = 'Portada' }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const handleFile = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setError(null);
    setUploading(true);
    try {
      const { url } = await uploadImage(file);
      onChange(url);
    } catch (err) {
      console.error('[ImageUpload] fallo:', err);
      setError(err.message || 'No se pudo subir la imagen.');
    } finally {
      setUploading(false);
      // permite re-subir el mismo archivo si fallara
      if (inputRef.current) inputRef.current.value = '';
    }
  };

  return (
    <div>
      <label className="text-[11px] font-bold text-gray-500 uppercase tracking-wide block mb-2">
        {label}
      </label>

      {value ? (
        <div className="relative inline-block">
          <img
            src={value}
            alt={label}
            className="w-40 h-40 object-cover rounded-lg border border-gray-200"
          />
          <button
            type="button"
            onClick={() => onChange('')}
            className="absolute -top-2 -right-2 bg-white border border-gray-300 hover:bg-red-50 hover:border-red-300 hover:text-red-600 rounded-full p-1 shadow-sm transition-colors"
            aria-label="Quitar imagen"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className="w-40 h-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center text-gray-400">
          <ImageIcon size={32} />
          <span className="text-xs mt-2">Sin imagen</span>
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleFile}
        className="hidden"
      />

      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        disabled={uploading}
        className="mt-3 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white text-xs font-bold py-2 px-3 rounded-lg transition-colors"
      >
        <Upload size={14} />
        {uploading ? 'Subiendo…' : value ? 'Reemplazar imagen' : 'Subir imagen'}
      </button>

      {error && (
        <p className="text-xs text-red-600 mt-2 bg-red-50 border border-red-100 rounded-lg p-2">
          {error}
        </p>
      )}
    </div>
  );
}
