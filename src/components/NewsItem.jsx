export default function NewsItem({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white p-4 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors"
    >
      <p className="text-[9px] font-bold text-blue-600 uppercase mb-1">{item.source}</p>
      <h4 className="text-sm font-bold text-gray-800 leading-snug">{item.title}</h4>
    </a>
  );
}
