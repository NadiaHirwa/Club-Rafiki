export default function NewsCard({ item }) {
  const tagColors = {
    Education: 'bg-blue-50 text-blue-600',
    Sports: 'bg-green-50 text-green-600',
    Empowerment: 'bg-purple-50 text-purple-600',
    Health: 'bg-red-50 text-red-600',
    Culture: 'bg-yellow-50 text-yellow-700',
    Arts: 'bg-pink-50 text-pink-600',
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all cursor-pointer group">
      <div className="overflow-hidden h-48">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
      </div>
      <div className="p-6">
        <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${tagColors[item.tag] || 'bg-orange-light text-orange'}`}>
          {item.tag}
        </span>
        <h3 className="font-display text-lg text-dark leading-snug mb-2">{item.title}</h3>
        <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
        <div className="mt-3 flex gap-3 text-xs text-muted">
          <span className="inline-flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {item.date}
          </span>
          <span>{item.read}</span>
        </div>
      </div>
    </div>
  )
}
