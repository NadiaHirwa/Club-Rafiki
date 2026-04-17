import { useState, useEffect } from 'react'
import { heroSlides, stats, programs, testimonials } from '../data/siteData'
import NewsCard from '../components/NewsCard'
import { news } from '../data/siteData'

function HeroSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % heroSlides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const prev = () => setCurrent(c => (c - 1 + heroSlides.length) % heroSlides.length)
  const next = () => setCurrent(c => (c + 1) % heroSlides.length)

  return (
    <section className="relative h-[85vh] min-h-[520px] overflow-hidden">
      {heroSlides.map((s, i) => (
        <div key={i} className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? 'opacity-100' : 'opacity-0'}`}>
          <img src={s.img} alt={s.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,.25), rgba(0,0,0,.55))' }} />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <span className="inline-block bg-orange rounded-full px-4 py-1 text-xs font-bold tracking-widest uppercase mb-4">
          {heroSlides[current].tag}
        </span>
        <h1 className="font-display font-black text-4xl md:text-6xl leading-tight mb-4 max-w-3xl">
          {heroSlides[current].title}
        </h1>
        <p className="text-white/90 text-lg max-w-xl mb-8">{heroSlides[current].sub}</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <button className="btn-primary">Get Involved</button>
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4 pointer-events-none">
        {[prev, next].map((fn, i) => (
          <button key={i} onClick={fn}
            className="pointer-events-auto w-11 h-11 rounded-full border border-white/30 bg-white/20 backdrop-blur-sm grid place-items-center hover:bg-white/40 transition-colors cursor-pointer">
            <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-white fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]">
              {i === 0
                ? <><polyline points="15 18 9 12 15 6"/></>
                : <><polyline points="9 18 15 12 9 6"/></>
              }
            </svg>
          </button>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {heroSlides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full border-0 cursor-pointer transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}

function StatsBand() {
  return (
    <div className="bg-navy py-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={i} className={`text-center py-4 px-4 ${i < stats.length - 1 ? 'border-r border-white/15' : ''}`}>
              <div className="font-display text-4xl font-black text-orange leading-none">{s.value}</div>
              <div className="text-white/75 text-sm font-medium mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function PurposeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Who We Are</span>
          <h2 className="section-title">Our Purpose</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Club Rafiki has been a cornerstone of youth empowerment in Nyamirambo, Kigali since 1974.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {[
            { title: 'Our Vision', text: 'To contribute to the development of young people so that they grow in body and mind and are able to play a significant role in development.', border: 'border-orange' },
            { title: 'Our Mission', text: 'To empower children and youth through four fundamental actions: to train, inform, frame, and equip them for a successful future.', border: 'border-navy' },
          ].map((c, i) => (
            <div key={i} className={`bg-white rounded-2xl p-9 border-t-4 ${c.border} shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-transform`}>
              <h3 className="font-display text-2xl text-dark mb-3">{c.title}</h3>
              <p className="text-muted leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProgramsPreview() {
  const [active, setActive] = useState(0)
  const prog = programs[active]

  return (
    <section className="py-20 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-10">
          <span className="section-eyebrow">What We Do</span>
          <h2 className="section-title">Our Programs</h2>
          <p className="text-muted mt-3 max-w-lg mx-auto">Diverse activities designed to unlock the potential of every young person.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {programs.map((p, i) => (
            <button key={p.id} onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border-2 transition-all cursor-pointer ${
                i === active ? 'bg-navy text-white border-navy' : 'bg-white text-muted border-border hover:bg-navy hover:text-white hover:border-navy'
              }`}>
              {p.label}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.08)] grid md:grid-cols-2">
          <div className="min-h-[320px]">
            <img src={prog.img} alt={prog.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-10">
            <h3 className="font-display text-2xl text-navy mb-3">{prog.title}</h3>
            <p className="text-muted mb-5">{prog.desc}</p>
            <ul className="flex flex-col gap-2.5">
              {prog.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                  <span className="w-5 h-5 rounded-full bg-green flex-shrink-0 mt-0.5 flex items-center justify-center">
                    <svg viewBox="0 0 20 20" className="w-3 h-3 fill-none stroke-white stroke-[1.8] [stroke-linecap:round] [stroke-linejoin:round]">
                      <path d="M5 10l3 3 7-7"/>
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTACards({ navigate }) {
  const cards = [
    { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'Join a Program', desc: 'From coding to karate, discover your passion and find your community.', link: 'Learn More', page: 'programs' },
    { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', title: 'Volunteer', desc: 'Share your skills, time, and passion to inspire the next generation.', link: 'Get Involved', page: 'contact' },
    { icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z', title: 'Donate', desc: 'Your gift provides a safe space and real opportunities for youth to thrive.', link: 'Give Now', page: 'donate' },
    { icon: 'M3 4h18v18H3zM16 2v4M8 2v4M3 10h18', title: 'Upcoming Events', desc: 'Join us for festivals, competitions, workshops and community gatherings.', link: 'See Events', page: 'news' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Get Involved</span>
          <h2 className="section-title">How You Can Help</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c, i) => (
            <button key={i} onClick={() => navigate(c.page)}
              className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all text-left cursor-pointer border-0 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-orange-light grid place-items-center mb-4">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-orange fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d={c.icon}/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-dark mb-2">{c.title}</h3>
              <p className="text-muted text-sm flex-1">{c.desc}</p>
              <div className="mt-4 text-orange font-bold text-sm flex items-center gap-1">
                {c.link}
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-orange fill-none stroke-[2.5]">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000)
    return () => clearInterval(id)
  }, [])

  const t = testimonials[current]

  return (
    <section className="py-20 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-14">
          <span className="section-eyebrow">Voices</span>
          <h2 className="font-display text-3xl md:text-4xl text-white">Words From Our Supporters</h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full object-cover mx-auto mb-5 border-[3px] border-orange" />
          <blockquote className="font-display text-xl italic text-white/90 leading-relaxed mb-5">"{t.quote}"</blockquote>
          <p className="font-bold text-white">{t.name}</p>
          <p className="text-orange text-sm">{t.title}</p>
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full border-0 cursor-pointer transition-colors ${i === current ? 'bg-orange' : 'bg-white/25'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function HomePage({ navigate }) {
  return (
    <>
      <HeroSlider />
      <StatsBand />
      <PurposeSection />
      <ProgramsPreview />
      <CTACards navigate={navigate} />
      {/* News Preview */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Latest</span>
            <h2 className="section-title">News & Stories</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((n, i) => <NewsCard key={i} item={n} />)}
          </div>
        </div>
      </section>
      <TestimonialsSection />
    </>
  )
}
