import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { useToast } from '../context/ToastContext'
import { useFormModal } from '../components/VolunteerPartnerModals'

const inputClass = 'w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors'

function ContactIcon({ type }) {
  const base = 'w-5 h-5 stroke-orange fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]'
  if (type === 'pin') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
  if (type === 'clock') return (
    <svg viewBox="0 0 24 24" className={base}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
  if (type === 'mail') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
  if (type === 'phone') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.08 6.08l1.95-1.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
  return null
}

export default function ContactPage() {
  const showToast = useToast()
  const { openVolunteer, openPartner, ModalComponent } = useFormModal()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      showToast('Message sent! We\'ll get back to you soon.')
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      showToast('Please fill in all required fields.')
    }
  }

  const contactInfo = [
    { type: 'pin',   label: 'Address', value: 'KN 2 AV 266, Nyamirambo, Kigali, Rwanda' },
    { type: 'clock', label: 'Hours',   value: 'Monday – Saturday: 09:00 AM – 7:00 PM' },
    { type: 'mail',  label: 'Email',   value: 'clubrafiki@yahoo.com · info@clubrafiki.com' },
    { type: 'phone', label: 'Phone',   value: '+250 788 853 615 · +250 788 512 668' },
  ]

  return (
    <>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you. Reach out to get involved or learn more." />

      {/* ── Get Involved Cards ── */}
      <section className="py-14 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <span className="section-eyebrow">Get Involved</span>
            <h2 className="section-title">Join Our Community</h2>
            <p className="text-muted mt-3 max-w-lg mx-auto">
              Whether you want to give your time or build a partnership, we'd love to connect with you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

            {/* Volunteer card */}
            <div className="bg-cream rounded-2xl p-8 border border-border hover:border-orange hover:shadow-[0_8px_32px_rgba(232,84,26,0.10)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-orange fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-dark mb-2">Volunteer With Us</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Share your skills, time, and passion to inspire the next generation. We welcome volunteers in teaching, ICT, sports, health, arts, and more.
              </p>
              <button
                onClick={openVolunteer}
                className="inline-flex items-center gap-2 bg-orange text-white rounded-full px-6 py-2.5 text-sm font-bold hover:bg-orange-dark transition-colors border-0 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round]">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Apply to Volunteer
              </button>
            </div>

            {/* Partner card */}
            <div className="bg-cream rounded-2xl p-8 border border-border hover:border-navy hover:shadow-[0_8px_32px_rgba(26,58,107,0.10)] transition-all">
              <div className="w-12 h-12 rounded-xl bg-navy-light flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-navy fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                </svg>
              </div>
              <h3 className="font-display text-xl text-dark mb-2">Partner With Us</h3>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Organizations, foundations, and businesses can partner with Club Rafiki to support youth empowerment through funding, in-kind support, or program collaboration.
              </p>
              <button
                onClick={openPartner}
                className="inline-flex items-center gap-2 bg-navy text-white rounded-full px-6 py-2.5 text-sm font-bold hover:bg-[#122d55] transition-colors border-0 cursor-pointer"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round]">
                  <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                </svg>
                Send Partnership Request
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact Info + General Form ── */}
      <section className="py-16 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Info */}
            <div>
              <span className="section-eyebrow">Find Us</span>
              <h2 className="section-title mb-6">Get In Touch</h2>
              <p className="text-muted leading-relaxed mb-8">
                Have a general question or want to learn more about Club Rafiki? Fill in the form or reach us through any of the channels below.
              </p>

              <div className="flex flex-col gap-5">
                {contactInfo.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] flex items-center justify-center flex-shrink-0">
                      <ContactIcon type={item.type} />
                    </div>
                    <div>
                      <p className="font-bold text-dark text-sm">{item.label}</p>
                      <p className="text-muted text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="mt-8">
                <p className="text-sm font-semibold text-dark mb-3">Follow Us</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { href: 'https://www.facebook.com/clubrafikicentre', label: 'Facebook' },
                    { href: 'https://www.instagram.com/clubrafikiyouth/', label: 'Instagram' },
                    { href: 'https://x.com/yegoclubrafiki', label: 'X / Twitter' },
                    { href: 'https://www.youtube.com/@clubrafiki4198', label: 'YouTube' },
                    { href: 'https://www.linkedin.com/in/club-rafiki-926267341/', label: 'LinkedIn' },
                  ].map((s, i) => (
                    <a key={i} href={s.href} target="_blank" rel="noreferrer"
                      className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink border border-border hover:bg-orange hover:text-white hover:border-orange transition-colors">
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* General contact form */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <h3 className="font-display text-2xl text-dark mb-1">Send a Message</h3>
              <p className="text-muted text-sm mb-6">For general enquiries about Club Rafiki.</p>
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Full Name <span className="text-orange">*</span></label>
                    <input className={inputClass} value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Email <span className="text-orange">*</span></label>
                    <input className={inputClass} type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Subject</label>
                  <input className={inputClass} value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))} placeholder="What is this about?" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Message <span className="text-orange">*</span></label>
                  <textarea className={`${inputClass} resize-none`} rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} placeholder="Write your message here..." />
                </div>
                <button onClick={handleSubmit}
                  className="bg-navy text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#122d55] transition-colors cursor-pointer border-0 flex items-center justify-center gap-2 mt-1">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                    <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                  </svg>
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map placeholder ── */}
      <div className="h-64 bg-navy-light flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center mx-auto mb-3 shadow-sm">
            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-navy fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
          </div>
          <p className="font-bold text-navy">Club Rafiki — Nyamirambo, Kigali</p>
          <a href="https://maps.google.com/?q=KN+2+AV+266+Nyamirambo+Kigali+Rwanda"
            target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-orange font-semibold text-sm hover:underline">
            Open in Google Maps
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 stroke-orange fill-none stroke-2 [stroke-linecap:round]">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>

      {ModalComponent}
    </>
  )
}
