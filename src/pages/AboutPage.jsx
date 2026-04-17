import PageBanner from '../components/PageBanner'
import { partners } from '../data/siteData'

export default function AboutPage() {
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

      {/* Partners */}
      <section className="py-20 bg-white">
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
    </>
  )
}
