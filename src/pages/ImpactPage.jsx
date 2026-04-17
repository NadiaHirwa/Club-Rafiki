import PageBanner from '../components/PageBanner'
import { impactStats } from '../data/siteData'

const stories = [
  {
    img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    quote: 'Club Rafiki gave me the skills and confidence to start my own tailoring business. The Girl Up program changed my life.',
    name: 'Uwase Diane',
    title: 'Girl Up Graduate, 2023',
  },
  {
    img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
    quote: 'Through the ICT program I learned web development. I now work as a junior developer at a Kigali tech company.',
    name: 'Mugisha Eric',
    title: 'ICT Graduate, 2022',
  },
  {
    img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
    quote: 'Basketball at Rafiki kept me off the streets and taught me discipline. I now coach the junior team every Saturday.',
    name: 'Nshimiyimana Jean',
    title: 'Sports Program Alumni',
  },
]

export default function ImpactPage() {
  return (
    <>
      <PageBanner title="Our Impact" subtitle="50 years of transforming lives in Nyamirambo and beyond." />

      {/* Big Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">By The Numbers</span>
            <h2 className="section-title">Impact in Numbers</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {impactStats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="font-display text-4xl font-black text-orange">{s.number}</div>
                <div className="text-muted mt-2 font-medium text-sm leading-snug">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">Testimonials</span>
            <h2 className="section-title">Stories of Change</h2>
            <p className="text-muted mt-3 max-w-lg mx-auto">Real voices from the young people whose lives have been transformed.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {stories.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                <div className="h-52 overflow-hidden">
                  <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <blockquote className="text-muted italic leading-relaxed mb-4 text-sm">"{s.quote}"</blockquote>
                  <p className="font-bold text-dark text-sm">{s.name}</p>
                  <p className="text-orange text-xs mt-0.5">{s.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-dark text-white">
        <div className="max-w-[800px] mx-auto px-6">
          <div className="text-center mb-14">
            <span className="section-eyebrow">History</span>
            <h2 className="font-display text-3xl md:text-4xl text-white">Our Journey</h2>
          </div>
          <div className="relative border-l-2 border-orange/30 pl-8 flex flex-col gap-10">
            {[
              { year: '1974', text: 'Founded by the Congregation of Dominican Fathers in Nyamirambo, Kigali.' },
              { year: '1976', text: 'Government grants land; library, main hall, basketball and volleyball courts established.' },
              { year: '1978', text: 'Officially granted not-for-profit status.' },
              { year: '1994', text: 'Facilities looted and demolished during the Genocide against the Tutsi. Club Rafiki begins rebuilding.' },
              { year: '2011', text: 'Officially registered as a Community-Based Organization by the Rwanda Governance Board (RGB).' },
              { year: 'Today', text: 'Reaching 5,000+ youth annually through education, sports, culture, health and empowerment programs.' },
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="absolute -left-[42px] top-1 w-4 h-4 rounded-full bg-orange border-4 border-dark" />
                <span className="text-orange font-bold text-sm">{item.year}</span>
                <p className="text-white/70 mt-1 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
