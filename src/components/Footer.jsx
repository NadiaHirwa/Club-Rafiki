import { useState } from 'react'
import { useToast } from '../context/ToastContext'
import { useFormModal } from './VolunteerPartnerModals'

export default function Footer({ navigate }) {
  const [email, setEmail] = useState('')
  const showToast = useToast()
  const { openVolunteer, openPartner, ModalComponent } = useFormModal()

  const handleSubscribe = () => {
    if (email) {
      showToast('Thank you for subscribing!')
      setEmail('')
    }
  }

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 font-display font-black text-xl text-white mb-4">
              <img
                src="/assets/logo.jpeg"
                alt="Club Rafiki logo"
                className="w-12 h-12 rounded-xl object-cover bg-white"
              />
              Club Rafiki
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Empowering children and youth of Nyamirambo, Kigali since 1974 — training, informing, framing, and equipping the next generation.
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.facebook.com/ClubRafikiNyamirambo/', d: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
                { href: 'https://www.instagram.com/club_rafiki/', d: null, isInstagram: true },
                { href: 'https://twitter.com/ClubRafiki', d: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-orange transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2">
                    {s.isInstagram ? (
                      <>
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                      </>
                    ) : (
                      <path d={s.d} fill="white" stroke="none"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Quick Links</h4>
            <ul className="space-y-2">
              {[['about','About Us'],['programs','Our Programs'],['media','News & Media'],['impact','Our Impact'],['gallery','Gallery']].map(([page, label]) => (
                <li key={page}>
                  <button onClick={() => navigate(page)} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Get Involved</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => navigate('donate')} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Donate</button>
              </li>
              <li>
                <button onClick={openVolunteer} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Volunteer</button>
              </li>
              <li>
                <button onClick={openPartner} className="text-white/55 hover:text-orange text-sm transition-colors bg-transparent border-0 cursor-pointer p-0">Partner With Us</button>
              </li>
              <li><a href="https://www.flickr.com/photos/101217036@N07/albums" target="_blank" rel="noreferrer" className="text-white/55 hover:text-orange text-sm transition-colors">Flickr Channel</a></li>
              <li><a href="https://www.youtube.com/channel/UC-cGA35029h5G32s2aV2Y3g" target="_blank" rel="noreferrer" className="text-white/55 hover:text-orange text-sm transition-colors">YouTube Channel</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-white/80">Stay Updated</h4>
            <p className="text-white/55 text-sm mb-3">Subscribe for latest news and events from Club Rafiki.</p>
            <div className="flex rounded-xl overflow-hidden border border-white/15">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-white/10 text-white placeholder-white/35 text-sm px-4 py-3 outline-none"
              />
              <button onClick={handleSubscribe} className="bg-orange text-white text-sm font-bold px-4 hover:bg-orange-dark transition-colors cursor-pointer border-0">
                Go
              </button>
            </div>
            <p className="text-white/40 text-xs mt-3 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              KN 2 AV 266, Nyamirambo, Kigali
            </p>
            <p className="text-white/40 text-xs mt-1 flex items-center gap-1.5">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-current fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              Mon-Sat: 09:00 AM - 7:00 PM
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-sm">
          <p>© 2025 Club Rafiki Youth Empowerment Center. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-orange" aria-hidden="true">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            for the youth of Rwanda
          </p>
        </div>
      </div>
      {ModalComponent}
    </footer>
  )
}
