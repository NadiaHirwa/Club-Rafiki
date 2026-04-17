import PageBanner from '../components/PageBanner'

const activities = [
  { img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg', badge: 'Education', badgeColor: 'bg-blue-100 text-blue-700', title: 'Training & Education', desc: 'ICT, language literacy, entrepreneurship workshops, and career guidance to prepare youth for the job market.' },
  { img: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg', badge: 'Culture', badgeColor: 'bg-yellow-100 text-yellow-700', title: 'Cultural Initiatives', desc: 'Traditional dance, drama, visual arts, the Journal Rafiki publication, and community debates preserving Rwandan heritage.' },
  { img: 'https://i.ibb.co/ccb1JwML/Health-pictures.png', badge: 'Health', badgeColor: 'bg-red-100 text-red-700', title: 'Health Outreach', desc: 'SRHR education, HIV prevention campaigns, peer counseling, and mobile VCT units serving Nyamirambo and rural areas.' },
  { img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg', badge: 'Sport', badgeColor: 'bg-green-100 text-green-700', title: 'Sport & Recreation', desc: 'Basketball, volleyball, karate, kung-fu, acrobatics, gymnastics, table tennis, and community sports events.' },
  { img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png', badge: 'Girls', badgeColor: 'bg-pink-100 text-pink-700', title: 'Girls Empowerment', desc: '"Girl Up" leadership circles, vocational training, financial literacy, and advocacy for girls\' rights and education.' },
  { img: 'https://i.ibb.co/PsjqzjV4/Music-2-1.png', badge: 'Arts', badgeColor: 'bg-purple-100 text-purple-700', title: 'Youth Empowerment', desc: 'Urban dance school, music classes, fashion design vocational training, film projections, and creative expression labs.' },
]

export default function ProgramsPage() {
  return (
    <>
      <PageBanner title="Our Programs" subtitle="Comprehensive activities designed to unlock the full potential of every young person in our community." />
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all group">
                <div className="h-52 overflow-hidden">
                  <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${a.badgeColor}`}>{a.badge}</span>
                  <h3 className="font-display text-xl text-dark mb-2">{a.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
