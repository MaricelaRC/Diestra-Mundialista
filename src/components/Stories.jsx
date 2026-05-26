import { hotelesDiestra } from '../data/hoteles.js';

export default function Stories() {
  return (
    <div className="flex gap-4 overflow-x-auto px-4 md:px-6 py-4 no-scrollbar">
      {hotelesDiestra.map((hotel) => (
        <a
          key={hotel.id}
          href={hotel.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram de ${hotel.name}`}
          className="flex flex-col items-center flex-shrink-0 active:scale-95 transition-transform"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] bg-gradient-to-tr from-red-500 to-yellow-500">
            <div className="w-full h-full rounded-full border-2 border-white overflow-hidden bg-gray-200">
              <img
                src={hotel.storyImg}
                alt={hotel.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <span className="text-[10px] md:text-xs mt-1 text-gray-600 font-medium max-w-[80px] truncate text-center">
            {hotel.name}
          </span>
        </a>
      ))}
    </div>
  );
}
