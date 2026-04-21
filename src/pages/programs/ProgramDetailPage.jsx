import { useFormModal } from '../../components/VolunteerPartnerModals'

export default function ProgramDetailPage({ program, navigate }) {
  const { openVolunteer, openPartner, ModalComponent } = useFormModal()
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
                <div className="text-3xl mb-3">{sec.icon}</div>
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
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6"
            style={{ background: program.accentColor + '20' }}
          >
            🤝
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
            <div className="flex gap-3">
              <button
                onClick={openVolunteer}
                className="btn-outline !text-ink !border-border hover:!bg-white transition-colors"
              >
                Volunteer
              </button>
              <button
                onClick={openPartner}
                className="btn-outline !text-ink !border-border hover:!bg-white transition-colors"
              >
                Partner With Us
              </button>
            </div>
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

      {ModalComponent}
    </>
  )
}
