const sectionIconMap = {
  '❤️': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  '🏥': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M3 21h18" />
      <path d="M5 21V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14" />
      <path d="M10 10h4" />
      <path d="M12 8v4" />
      <path d="M9 21v-5h6v5" />
    </svg>
  ),
  '📣': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M3 11v2a2 2 0 0 0 2 2h3l5 4V5L8 9H5a2 2 0 0 0-2 2z" />
      <path d="M16 9a4 4 0 0 1 0 6" />
      <path d="M19 7a7 7 0 0 1 0 10" />
    </svg>
  ),
  '🏀': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3a9 9 0 0 1 0 18" />
      <path d="M12 3a9 9 0 0 0 0 18" />
    </svg>
  ),
  '🥋': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M4 6h16l-6 6v6h-4v-6z" />
      <path d="M10 18l-2 3" />
      <path d="M14 18l2 3" />
    </svg>
  ),
  '🤝': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M8 10l3-3a3 3 0 0 1 4 0l1 1" />
      <path d="M2 11l4-4 6 6-4 4z" />
      <path d="M22 11l-4-4-6 6 4 4z" />
      <path d="M8.5 14.5l2 2" />
      <path d="M11 12l3 3" />
    </svg>
  ),
  '🎭': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M4 5h16v4a8 8 0 0 1-8 8 8 8 0 0 1-8-8z" />
      <path d="M8 10h.01" />
      <path d="M16 10h.01" />
      <path d="M9 13c1 .8 2 .8 3 .8s2 0 3-.8" />
    </svg>
  ),
  '🎵': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M9 18V6l10-2v12" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="16" cy="16" r="3" />
    </svg>
  ),
  '✂️': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4L8.12 15.88" />
      <path d="M14.47 14.48L20 20" />
      <path d="M8.12 8.12L12 12" />
    </svg>
  ),
  '🎬': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M7 4l4 4" />
      <path d="M13 4l4 4" />
      <path d="M7 20l4-4" />
      <path d="M13 20l4-4" />
    </svg>
  ),
  '📚': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      <path d="M8 6h8" />
      <path d="M8 10h8" />
    </svg>
  ),
  '🏛️': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M3 10h18" />
      <path d="M4 10v8" />
      <path d="M9 10v8" />
      <path d="M15 10v8" />
      <path d="M20 10v8" />
      <path d="M2 18h20" />
      <path d="M12 3l10 5H2z" />
    </svg>
  ),
  '🎨': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 0 18h1a3 3 0 0 0 0-6h-1a3 3 0 0 1 0-6h1a3 3 0 0 0 0-6z" />
      <circle cx="7.5" cy="10.5" r="1" />
      <circle cx="9.5" cy="7.5" r="1" />
      <circle cx="13.5" cy="7.5" r="1" />
    </svg>
  ),
  '📖': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M2 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v16a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3z" />
      <path d="M22 5a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v16a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3z" />
    </svg>
  ),
  '💻': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  ),
  '💼': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 13h20" />
    </svg>
  ),
  '🔧': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-3 3z" />
    </svg>
  ),
  '⭐': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M12 2l2.9 6.2L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 7.1-1.1z" />
    </svg>
  ),
  '⚽': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7l3 2-1 3h-4L9 9z" />
      <path d="M7 10l2 5" />
      <path d="M17 10l-2 5" />
    </svg>
  ),
  '🎓': (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <path d="M2 9l10-5 10 5-10 5z" />
      <path d="M6 11v4c0 2 3 4 6 4s6-2 6-4v-4" />
      <path d="M22 9v6" />
    </svg>
  ),
}

function SectionIcon({ icon }) {
  return sectionIconMap[icon] ?? (
    <svg viewBox="0 0 24 24" className="w-7 h-7 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </svg>
  )
}

export default function ProgramDetailPage({ program, navigate }) {
  if (!program) return null

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={program.heroImg} alt={program.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.65))' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <span className={`inline-block text-xs font-bold px-3 py-1.5 rounded-full mb-4 ${program.badgeColor}`}>
            {program.badge}
          </span>
          <h1 className="font-display font-black text-4xl md:text-5xl mb-3 max-w-2xl">{program.title}</h1>
          <p className="text-white/85 text-lg max-w-xl">{program.tagline}</p>
        </div>
        {/* Back button */}
        <button
          onClick={() => navigate('programs')}
          className="absolute top-5 left-5 flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-white/35 transition-colors border-0 cursor-pointer"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
          All Programs
        </button>
      </div>

      {/* ── Description ── */}
      <section className="py-16 bg-white">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="max-w-3xl">
            <span className="section-eyebrow">Overview</span>
            <h2 className="section-title mb-8">About This Program</h2>
            {program.description.map((para, i) => (
              <p key={i} className="text-muted leading-loose mb-5">{para}</p>
            ))}

            {/* PDF download if available */}
            {program.pdfLink && (
              <a
                href={program.pdfLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-2 bg-cream border border-border rounded-xl px-5 py-3 text-sm font-semibold text-ink hover:border-navy hover:text-navy transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
                {program.pdfLabel}
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ── Stats Band ── */}
      <div className="py-8" style={{ background: program.accentColor }}>
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {program.stats.map((s, i) => (
              <div key={i} className={`text-center py-4 px-4 ${i < program.stats.length - 1 ? 'border-r border-white/20' : ''}`}>
                <div className="font-display text-3xl font-black text-white leading-none">{s.number}</div>
                <div className="text-white/75 text-sm font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Activity Sections ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="text-center mb-12">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="section-title">Activities & Services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {program.sections.map((sec, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="mb-3 text-[color:var(--icon-color)]" style={{ '--icon-color': program.accentColor }}>
                  <SectionIcon icon={sec.icon} />
                </div>
                <h3 className="font-display text-lg text-dark mb-4">{sec.title}</h3>
                <ul className="flex flex-col gap-2.5">
                  {sec.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
                        style={{ background: program.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="py-16 bg-dark text-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <div className="text-5xl mb-6 opacity-40">"</div>
          <blockquote className="font-display text-xl md:text-2xl italic leading-relaxed text-white/90 mb-6">
            {program.quote.text}
          </blockquote>
          <p className="font-bold text-white">{program.quote.author}</p>
          <p className="text-sm mt-1" style={{ color: program.accentColor }}>{program.quote.role}</p>
        </div>
      </section>

      {/* ── Photo Gallery ── */}
      {program.photos && program.photos.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-6">
            <div className="text-center mb-10">
              <span className="section-eyebrow">Gallery</span>
              <h2 className="section-title">Program Photos</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {program.photos.map((src, i) => (
                <div key={i} className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-1 md:row-span-2' : ''}`}>
                  <img src={src} alt={`${program.title} ${i + 1}`} className="w-full h-full object-cover min-h-[200px]" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Get Involved CTA ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-[700px] mx-auto px-6 text-center">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[color:var(--icon-color)]"
            style={{ background: program.accentColor + '20' }}
          >
            <SectionIcon icon="🤝" />
          </div>
          <span className="section-eyebrow">Get Involved</span>
          <h2 className="section-title mb-4">Support This Program</h2>
          <p className="text-muted leading-relaxed mb-8">{program.getInvolvedText}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => navigate('donate')}
              className="btn-primary"
              style={{ background: program.accentColor }}
            >
              Donate to This Program
            </button>
            <button
              onClick={() => navigate('contact')}
              className="btn-outline !text-ink !border-border hover:!bg-white transition-colors"
            >
              Volunteer or Partner
            </button>
          </div>
        </div>
      </section>

      {/* ── Other Programs ── */}
      <section className="py-12 bg-white border-t border-border">
        <div className="max-w-[1100px] mx-auto px-6 text-center">
          <p className="text-muted text-sm mb-4">Explore all our programs</p>
          <button
            onClick={() => navigate('programs')}
            className="inline-flex items-center gap-2 text-navy font-bold hover:text-orange transition-colors bg-transparent border-0 cursor-pointer text-sm"
          >
            ← Back to All Programs
          </button>
        </div>
      </section>
    </>
  )
}
