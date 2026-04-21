import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { newsItems, progressReports, rafikiBooksJournals, strategicPlan } from '../data/mediaData'

// ── Shared PDF download card ──────────────────────────────────────────────────
function PubCard({ img, title, desc, year, url, wide = false }) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all group flex flex-col ${wide ? 'sm:flex-row' : ''}`}>
      {img && (
        <div className={`overflow-hidden bg-cream flex-shrink-0 ${wide ? 'sm:w-40 h-40 sm:h-auto' : 'h-44'}`}>
          <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        {year && (
          <span className="inline-block bg-navy-light text-navy text-[11px] font-bold px-2.5 py-0.5 rounded-full mb-2 w-fit">{year}</span>
        )}
        <h4 className="font-display text-base text-dark leading-snug mb-2 flex-1">{title}</h4>
        {desc && <p className="text-muted text-xs leading-relaxed mb-3">{desc}</p>}
        {url && url !== '#' && (
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-orange font-bold text-xs hover:underline mt-auto"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-orange fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
              <polyline points="14 2 14 8 20 8"/>
            </svg>
            Download PDF
          </a>
        )}
      </div>
    </div>
  )
}

// ── News Tab ──────────────────────────────────────────────────────────────────
function NewsTab() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {newsItems.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all group">
          <div className="overflow-hidden h-48">
            <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-orange-light text-orange">{item.tag}</span>
              <span className="text-muted text-xs">{item.date}</span>
            </div>
            <h3 className="font-display text-lg text-dark leading-snug mb-2">{item.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            {item.url && item.url !== '#' ? (
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 text-orange font-bold text-sm hover:underline"
              >
                Read Full Article
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-orange fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            ) : (
              <p className="mt-4 text-muted/50 text-xs italic flex items-center gap-1">
                <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {item.read}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

// ── Publications Tab ──────────────────────────────────────────────────────────
function PublicationsTab() {
  const [section, setSection] = useState('reports')

  const sections = [
    { id: 'reports', label: '📊 Progress Reports' },
    { id: 'books', label: '📚 RAFIKI Books' },
    { id: 'journals', label: '📰 RAFIKI Journals' },
    { id: 'strategic', label: '🎯 Strategic Plan' },
    { id: 'ebooks', label: '🌐 E-Books & Links' },
  ]

  return (
    <div>
      {/* Sub-tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setSection(s.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${
              section === s.id
                ? 'bg-navy text-white border-navy'
                : 'bg-white text-muted border-border hover:border-navy hover:text-navy'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Progress Reports */}
      {section === 'reports' && (
        <>
          <div className="mb-6">
            <h3 className="font-display text-2xl text-dark mb-1">Progress Reports</h3>
            <p className="text-muted text-sm">Annual and semi-annual reports documenting Club Rafiki's work and impact over the years.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {progressReports.map((r, i) => (
              <PubCard key={i} img={r.img} title={r.title} year={r.year} url={r.url} />
            ))}
          </div>
        </>
      )}

      {/* RAFIKI Books */}
      {section === 'books' && (
        <>
          <div className="mb-6">
            <h3 className="font-display text-2xl text-dark mb-1">RAFIKI Books</h3>
            <p className="text-muted text-sm">Books written by Club Rafiki youth volunteers — stories, reflections, and creative works.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rafikiBooksJournals.books.map((b, i) => (
              <PubCard key={i} img={b.img} title={b.title} desc={b.desc} year={b.year} url={b.url} />
            ))}
          </div>
        </>
      )}

      {/* RAFIKI Journals */}
      {section === 'journals' && (
        <>
          <div className="mb-6">
            <h3 className="font-display text-2xl text-dark mb-1">RAFIKI Journals</h3>
            <p className="text-muted text-sm">The RAFIKI Journal (also known as "Inshuti") — a children's and youth newspaper published by Club Rafiki volunteers.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {rafikiBooksJournals.journals.map((j, i) => (
              <a
                key={i}
                href={j.url}
                target="_blank"
                rel="noreferrer"
                className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.07)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(0,0,0,0.13)] transition-all"
              >
                <div className="h-40 overflow-hidden bg-cream">
                  <img src={j.img} alt={j.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-3">
                  <p className="text-xs font-bold text-dark leading-snug">{j.title}</p>
                  <p className="text-[11px] text-orange font-semibold mt-1 flex items-center gap-1">
                    <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-orange fill-none stroke-2 [stroke-linecap:round]">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                    </svg>
                    Download
                  </p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}

      {/* Strategic Plan */}
      {section === 'strategic' && (
        <>
          <div className="mb-8">
            <h3 className="font-display text-2xl text-dark mb-1">Strategic Plan</h3>
            <p className="text-muted text-sm">Club Rafiki's vision and roadmap for impactful youth empowerment.</p>
          </div>
          <div className="max-w-2xl">
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row">
              <div className="sm:w-64 h-52 sm:h-auto overflow-hidden flex-shrink-0">
                <img src={strategicPlan.img} alt={strategicPlan.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <span className="inline-block bg-orange text-white text-xs font-bold px-3 py-1 rounded-full mb-3">{strategicPlan.year}</span>
                  <h4 className="font-display text-2xl text-dark mb-3">{strategicPlan.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{strategicPlan.desc}</p>
                </div>
                <a
                  href={strategicPlan.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 mt-6 bg-navy text-white rounded-xl px-5 py-3 text-sm font-bold hover:bg-[#122d55] transition-colors w-fit"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round]">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
                  </svg>
                  Download Strategic Plan (PDF)
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      {/* E-Books & External Links */}
      {section === 'ebooks' && (
        <>
          <div className="mb-8">
            <h3 className="font-display text-2xl text-dark mb-1">E-Books & Learning Resources</h3>
            <p className="text-muted text-sm">Curated online learning resources and digital libraries recommended by Club Rafiki for children and youth.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {rafikiBooksJournals.ebooks.map((e, i) => (
              <a
                key={i}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className="bg-white rounded-2xl p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(0,0,0,0.10)] transition-all flex items-start gap-3 group"
              >
                <span className="text-2xl flex-shrink-0">{e.icon}</span>
                <div>
                  <p className="text-sm font-bold text-dark leading-snug group-hover:text-orange transition-colors">{e.title}</p>
                  <p className="text-xs text-muted mt-1 flex items-center gap-1">
                    Visit Resource
                    <svg viewBox="0 0 24 24" className="w-3 h-3 stroke-current fill-none stroke-2 [stroke-linecap:round]">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </p>
                </div>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function MediaPage() {
  const [activeTab, setActiveTab] = useState('news')

  return (
    <>
      <PageBanner title="Media & Publications" subtitle="Latest news, annual reports, RAFIKI books, journals, and strategic documents." />

      <section className="py-16 bg-cream min-h-screen">
        <div className="max-w-[1200px] mx-auto px-6">

          {/* Main Tab Switch */}
          <div className="flex gap-3 mb-12 bg-white rounded-2xl p-2 shadow-[0_2px_12px_rgba(0,0,0,0.06)] w-fit mx-auto">
            {[
              { id: 'news', label: '📰 News & Events' },
              { id: 'publications', label: '📂 Publications' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-7 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer border-0 ${
                  activeTab === tab.id
                    ? 'bg-navy text-white shadow-[0_4px_14px_rgba(26,58,107,0.3)]'
                    : 'bg-transparent text-muted hover:text-navy'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {activeTab === 'news' && <NewsTab />}
          {activeTab === 'publications' && <PublicationsTab />}

        </div>
      </section>
    </>
  )
}
