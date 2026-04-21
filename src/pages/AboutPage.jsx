import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { partners, certificates } from '../data/siteData'

function CertLightbox({ cert, onClose }) {
  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative h-64 bg-cream overflow-hidden">
          <img src={cert.img} alt={cert.title} className="w-full h-full object-cover" />
          <span className="absolute top-4 left-4 bg-orange text-white text-xs font-bold px-3 py-1.5 rounded-full">
            {cert.year}
          </span>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white text-lg grid place-items-center transition-colors border-0 cursor-pointer"
          >✕</button>
        </div>
        <div className="p-8">
          <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center mb-4">
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-orange stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
            </svg>
          </div>
          <h3 className="font-display text-2xl text-dark mb-1">{cert.title}</h3>
          <p className="text-orange font-semibold text-sm mb-4">{cert.issuer} · {cert.year}</p>
          <p className="text-muted leading-relaxed">{cert.description}</p>
        </div>
      </div>
    </div>
  )
}

function CertCard({ cert, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.14)] hover:-translate-y-1 transition-all text-left border-0 cursor-pointer w-full"
    >
      <div className="relative h-28 overflow-hidden bg-cream">
        <img
          src={cert.img}
          alt={cert.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-colors flex items-center justify-center">
          <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-white stroke-2 opacity-0 group-hover:opacity-100 transition-opacity [stroke-linecap:round] [stroke-linejoin:round]">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </div>
        <span className="absolute top-2 left-2 bg-orange text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
          {cert.year}
        </span>
      </div>
      <div className="p-3">
        <p className="text-xs font-bold text-dark leading-snug line-clamp-2">{cert.title}</p>
        <p className="text-[11px] text-muted mt-0.5 truncate">{cert.issuer}</p>
      </div>
    </button>
  )
}

export default function AboutPage() {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <>
      <PageBanner title="About Club Rafiki" subtitle="A community cornerstone for youth empowerment since 1974." />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <img src="https://picsum.photos/800/600?image=1015" alt="Youth at Club Rafiki" className="rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.15)]" />
            <div>
              <h2 className="font-display text-3xl text-dark mb-5">Our Story</h2>
              <p className="text-muted leading-loose mb-4">Our journey began in <strong className="text-dark">1974</strong>, founded by the Congregation of Dominican Fathers. By 1976, on land granted by the government, we established our core infrastructure — a library, a main hall, and basketball and volleyball courts.</p>
              <p className="text-muted leading-loose mb-4">We were officially granted not-for-profit status in 1978, with further expansion of our facilities in 1980 and 1986.</p>
              <p className="text-muted leading-loose mb-4"><strong className="text-dark">Tragically, during the 1994 Genocide against the Tutsi, most of our facilities were looted and demolished.</strong> Yet from the ashes, Club Rafiki rose again — committed to rebuilding not just structures, but the very fabric of our community through peace-building and reconciliation.</p>
              <p className="text-muted leading-loose">On April 18, 2011, we were officially registered as a community-based organization by the Rwanda Governance Board (RGB). Today our work centers on empowering youth of Nyarugenge District through a wide array of programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">What We Stand For</span>
            <h2 className="section-title">Core Principles</h2>
          </div>
          <div className="bg-white rounded-2xl p-12 shadow-[0_4px_24px_rgba(0,0,0,0.06)] grid md:grid-cols-[1fr_2fr] gap-10">
            <div>
              <h3 className="font-display text-2xl text-dark mb-5">Vision & Mission</h3>
              <div className="mb-6">
                <h4 className="text-navy font-bold mb-2">Our Vision</h4>
                <p className="text-muted leading-relaxed">To contribute to the development of young people so that they grow in body and mind and are able to play a significant role in development.</p>
              </div>
              <div>
                <h4 className="text-green font-bold mb-2">Our Mission</h4>
                <p className="text-muted mb-3">Our mission is articulated through four fundamental actions:</p>
                <ul className="flex flex-col gap-2">
                  {['To train children and youth','To inform children and youth','To frame children and youth','To equip children and youth'].map((item, i) => (
                    <li key={i} className="flex gap-2 items-start text-muted">
                      <span className="text-green mt-0.5">✦</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="font-display text-2xl text-dark mb-5">Supporting Objectives</h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Act as an umbrella organization for child and youth organizations in Rwanda',
                  'Build the capacity of young people',
                  'Foster cooperation, dialogue, networking and collaboration among youth organizations',
                  'Advocate and lobby for mainstreaming of child and youth issues in the national agenda',
                  'Organize capacity building programs and workshops to strengthen our network',
                  'Serve as a consulting and advisory body to government on youth issues',
                  'Organize events with national and international significance',
                  'Represent Rwandan youth in international policy-making bodies',
                  'Build alliances with international child and youth organizations',
                ].map((obj, i) => (
                  <li key={i} className="flex gap-3 items-start text-muted text-sm">
                    <span className="w-4 h-4 rounded-full bg-navy-light border-2 border-navy flex-shrink-0 mt-0.5" />
                    {obj}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates & Awards */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Recognition</span>
            <h2 className="section-title">Certificates & Awards</h2>
            <p className="text-muted mt-3 max-w-lg mx-auto">
              Formal recognition of our commitment to youth empowerment, community development, and organizational excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {certificates.map((cert, i) => (
              <CertCard key={i} cert={cert} onClick={() => setActiveCert(cert)} />
            ))}
          </div>
          <p className="text-center text-muted/50 text-xs mt-8 italic">
            Click any certificate to view details &nbsp;·&nbsp; Replace placeholder content in <code className="bg-cream px-1 rounded">src/data/siteData.js</code>
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Collaboration</span>
            <h2 className="section-title">Our Valued Partners</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {partners.map((p, i) => (
              <div key={i} className="partner-card bg-white rounded-xl py-5 px-3 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
                <img src={p.img} alt={p.name} className="h-12 object-contain mx-auto mb-2" />
                <p className="text-xs font-semibold text-muted">{p.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeCert && (
        <CertLightbox cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </>
  )
}
