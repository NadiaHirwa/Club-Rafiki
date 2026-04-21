export default function NewsArticlePage({ article, onBack }) {
  if (!article) return null

  const tagColors = {
    'Latest News':  'bg-orange-light text-orange',
    'Empowerment':  'bg-purple-100 text-purple-700',
    'Health':       'bg-red-100 text-red-700',
    'Education':    'bg-blue-100 text-blue-700',
    'Sports':       'bg-green-100 text-green-700',
    'Culture':      'bg-yellow-100 text-yellow-700',
    'Arts':         'bg-pink-100 text-pink-700',
  }

  return (
    <div className="bg-cream min-h-screen">

      {/* ── Hero ── */}
      <div className="relative h-[52vh] min-h-[360px] overflow-hidden">
        <img src={article.heroImg} alt={article.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.65))' }} />

        {/* Back button */}
        <button
          onClick={onBack}
          className="absolute top-5 left-5 flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/35 transition-colors border-0 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          Back to News
        </button>

        {/* Meta */}
        <div className="absolute bottom-0 left-0 right-0 p-8 max-w-[860px] mx-auto">
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-3 ${tagColors[article.tag] || 'bg-orange-light text-orange'}`}>
            {article.tag}
          </span>
          <h1 className="font-display font-black text-3xl md:text-4xl text-white leading-tight mb-2">
            {article.title}
          </h1>
          <p className="text-white/70 text-sm flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white/70 fill-none stroke-2 [stroke-linecap:round]">
              <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
            </svg>
            {article.date}
          </p>
        </div>
      </div>

      {/* ── Article Body ── */}
      <div className="max-w-[860px] mx-auto px-6 py-14">

        {/* Intro */}
        <p className="text-lg text-ink leading-relaxed font-medium mb-10 border-l-4 border-orange pl-5">
          {article.intro}
        </p>

        {/* Sections */}
        {article.sections.map((sec, i) => (
          <div key={i} className="mb-12">
            {sec.heading && (
              <h2 className="font-display text-2xl text-dark mb-4">{sec.heading}</h2>
            )}
            <p className="text-muted leading-loose mb-6">{sec.content}</p>

            {sec.quote && (
              <blockquote className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-l-4 border-orange my-6">
                <p className="font-display text-lg italic text-dark leading-relaxed mb-3">
                  "{sec.quote.text}"
                </p>
                <cite className="text-orange font-bold text-sm not-italic">— {sec.quote.author}</cite>
              </blockquote>
            )}
          </div>
        ))}

        {/* Photo Gallery */}
        {article.photos && article.photos.length > 1 && (
          <div className="mt-10 mb-12">
            <h3 className="font-display text-xl text-dark mb-5 flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-orange fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              Photos
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {article.photos.map((src, i) => (
                <div key={i} className={`rounded-xl overflow-hidden ${i === 0 ? 'col-span-2 md:col-span-2' : ''}`}>
                  <img
                    src={src}
                    alt={`${article.title} — photo ${i + 1}`}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer nav */}
        <div className="border-t border-border pt-8 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-navy font-bold text-sm hover:text-orange transition-colors bg-transparent border-0 cursor-pointer"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Back to News & Events
          </button>

          {/* Share links */}
          <div className="flex items-center gap-3">
            <span className="text-muted text-xs">Share:</span>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://clubrafiki.com')}`}
              target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-orange hover:text-white transition-colors text-muted"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}`}
              target="_blank" rel="noreferrer"
              className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-orange hover:text-white transition-colors text-muted"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
