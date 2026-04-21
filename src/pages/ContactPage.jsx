import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { useToast } from '../context/ToastContext'

export default function ContactPage() {
  const showToast = useToast()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      showToast('Message sent! We\'ll get back to you soon. 📩')
      setForm({ name: '', email: '', subject: '', message: '' })
    } else {
      showToast('Please fill in all required fields.')
    }
  }

  const inputClass = 'w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors'

  return (
    <>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you. Reach out to get involved or learn more." />

      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Info */}
            <div>
              <span className="section-eyebrow">Get In Touch</span>
              <h2 className="section-title mb-6">Let's Connect</h2>
              <p className="text-muted leading-relaxed mb-8">
                Whether you want to volunteer, partner with us, enroll in a program, or simply learn more — we're here. Come visit us in Nyamirambo or send us a message.
              </p>

              <div className="flex flex-col gap-5">
                {[
                  { icon: '📍', label: 'Address', value: 'KN 2 AV 266, Nyamirambo, Kigali, Rwanda' },
                  { icon: '⏰', label: 'Hours', value: 'Monday – Saturday: 09:00 AM – 7:00 PM' },
                  { icon: '📧', label: 'Email', value: 'info@clubrafiki.org' },
                  { icon: '📞', label: 'Phone', value: '+250 788 000 000' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center text-xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-bold text-dark text-sm">{item.label}</p>
                      <p className="text-muted text-sm mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-3">
                {[
                  { href: 'https://www.facebook.com/ClubRafikiNyamirambo/', label: 'Facebook' },
                  { href: 'https://www.instagram.com/club_rafiki/', label: 'Instagram' },
                  { href: 'https://twitter.com/ClubRafiki', label: 'Twitter' },
                  { href: 'https://www.youtube.com/channel/UC-cGA35029h5G32s2aV2Y3g', label: 'YouTube' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noreferrer"
                    className="px-4 py-2 bg-white rounded-full text-sm font-semibold text-ink border border-border hover:bg-orange hover:text-white hover:border-orange transition-colors">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <h3 className="font-display text-2xl text-dark mb-6">Send a Message</h3>
              <div className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Full Name *</label>
                    <input className={inputClass} value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-ink mb-1.5">Email *</label>
                    <input className={inputClass} type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))} placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Subject</label>
                  <input className={inputClass} value={form.subject} onChange={e => setForm(f => ({...f, subject: e.target.value}))} placeholder="What's this about?" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Message *</label>
                  <textarea className={`${inputClass} resize-none`} rows={5} value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))} placeholder="Write your message here..." />
                </div>
                <button onClick={handleSubmit} className="btn-primary w-full text-center mt-2 bg-navy hover:bg-[#122d55]">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map embed placeholder */}
      <div className="h-72 bg-navy-light flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-3">📍</div>
          <p className="font-bold text-navy">Club Rafiki — Nyamirambo, Kigali</p>
          <a
            href="https://maps.app.goo.gl/U4KTiGu9pUU9ihBG7"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 text-orange font-semibold text-sm hover:underline"
          >
            Open in Google Maps →
          </a>
        </div>
      </div>
    </>
  )
}
