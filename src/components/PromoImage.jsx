// Imagen que se adapta a cualquier aspect ratio sin recortar contenido.
// Usa la técnica "blur-fill": copia borrosa de la imagen rellena el contenedor
// como fondo, mientras la original se muestra centrada con object-contain.
// Resultado: flyers verticales no se cortan, fotos panorámicas se ven igual
// que antes (ocupan casi todo el contenedor).

export default function PromoImage({ src, alt, className = '', children }) {
  return (
    <div className={`relative overflow-hidden bg-gray-200 ${className}`}>
      {src && (
        <>
          {/* Fondo borroso para rellenar el contenedor cuando la imagen
              tiene un aspect ratio distinto al del contenedor. */}
          <img
            src={src}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-60 pointer-events-none"
          />
          {/* Imagen original centrada, sin recortar. */}
          <img
            src={src}
            alt={alt}
            className="relative w-full h-full object-contain"
            loading="lazy"
          />
        </>
      )}
      {children}
    </div>
  );
}
