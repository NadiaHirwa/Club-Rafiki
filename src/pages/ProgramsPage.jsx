import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import ProgramDetailPage from './programs/ProgramDetailPage'
import { programDetails } from '../data/programDetails'

const activities = [
  {
    detailKey: 'training',
    img: 'https://i.ibb.co/RTggy2pK/dsc-7517-scaled.jpg',
    badge: 'Education', badgeColor: 'bg-blue-100 text-blue-700',
    title: 'Training & Education',
    desc: 'ICT, language literacy, entrepreneurship workshops, and career guidance to prepare youth for the job market.',
  },
  {
    detailKey: 'cultural',
    img: 'https://i.ibb.co/CKBGq1mr/cropped-dsc-08142.jpg',
    badge: 'Culture', badgeColor: 'bg-yellow-100 text-yellow-700',
    title: 'Cultural Initiatives',
    desc: 'Traditional dance, drama, visual arts, the Journal Rafiki publication, and community debates preserving Rwandan heritage.',
  },
  {
    detailKey: 'health',
    img: 'https://i.ibb.co/ccb1JwML/Health-pictures.png',
    badge: 'Health', badgeColor: 'bg-red-100 text-red-700',
    title: 'Health Outreach',
    desc: 'SRHR education, HIV prevention campaigns, peer counseling, and mobile VCT units serving Nyamirambo and rural areas.',
  },
  {
    detailKey: 'sports',
    img: 'https://i.ibb.co/35x8RJ9W/52112159933-8dee1762f0-c.jpg',
    badge: 'Sport', badgeColor: 'bg-green-100 text-green-700',
    title: 'Sport & Recreation',
    desc: 'Basketball, volleyball, karate, kung-fu, acrobatics, gymnastics, table tennis, and community sports events.',
  },
  {
    detailKey: 'girls',
    img: 'https://i.ibb.co/HpYNKtq4/Semester-report-2024-photo.png',
    badge: 'Girls', badgeColor: 'bg-pink-100 text-pink-700',
    title: 'Empowering Girls',
    desc: '"Our Girls" program with leadership circles, vocational training, financial literacy, and advocacy for girls\' rights.',
  },
  {
    detailKey: 'arts',
    img: 'https://i.ibb.co/PsjqzjV4/Music-2-1.png',
    badge: 'Arts', badgeColor: 'bg-purple-100 text-purple-700',
    title: 'Youth Empowerment',
    desc: 'Urban dance school, music classes, fashion design vocational training, film projections, and creative expression labs.',
  },
]

export default function ProgramsPage({ navigate }) {
  const [activeDetail, setActiveDetail] = useState(null)

  // Show detail page if one is selected
  if (activeDetail) {
    return (
      <ProgramDetailPage
        program={programDetails[activeDetail]}
        navigate={(page) => {
          if (page === 'programs') setActiveDetail(null)
          else navigate(page)
        }}
      />
    )
  }

  return (
    <>
      <PageBanner
        title="Our Programs"
        subtitle="Comprehensive activities designed to unlock the full potential of every young person in our community."
      />
      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <button
                key={i}
                onClick={() => setActiveDetail(a.detailKey)}
                className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] transition-all group text-left border-0 cursor-pointer w-full"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover overlay with "View Details" */}
                  <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white text-dark text-sm font-bold px-5 py-2.5 rounded-full flex items-center gap-2">
                      View Details
                      <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-current fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${a.badgeColor}`}>
                    {a.badge}
                  </span>
                  <h3 className="font-display text-xl text-dark mb-2">{a.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{a.desc}</p>
                  <div className="mt-4 flex items-center gap-1 text-orange text-sm font-bold">
                    Learn More
                    <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-orange fill-none stroke-[2.5] [stroke-linecap:round] [stroke-linejoin:round]">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
