import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { useToast } from '../context/ToastContext'

const AMOUNTS = [25, 50, 100, 250]

export default function DonatePage() {
  const showToast = useToast()
  const [type, setType] = useState('one-time')
  const [selectedAmt, setSelectedAmt] = useState(50)
  const [customAmt, setCustomAmt] = useState('')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleDonate = () => {
    const amount = customAmt || selectedAmt
    if (!form.name || !form.email) {
      showToast('Please enter your name and email.')
      return
    }
    showToast(`Thank you, ${form.name}! Your $${amount} ${type} gift is being processed. 🙏`)
  }

  return (
    <>
      <PageBanner title="Make a Donation" subtitle="Your generosity changes lives in Nyamirambo, Kigali." />

      <section className="py-20 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* Form */}
            <div className="bg-white rounded-2xl p-10 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
              <h2 className="font-display text-2xl text-dark mb-6">Choose Your Gift</h2>

              {/* Type toggle */}
              <div className="grid grid-cols-2 bg-[#f1ede6] rounded-xl p-1 mb-6">
                {['one-time', 'monthly'].map(t => (
                  <button key={t} onClick={() => setType(t)}
                    className={`py-2.5 rounded-lg text-sm font-semibold transition-all cursor-pointer border-0 capitalize ${type === t ? 'bg-navy text-white' : 'bg-transparent text-muted'}`}>
                    {t === 'one-time' ? 'One-Time' : 'Monthly'}
                  </button>
                ))}
              </div>

              {/* Amounts */}
              <p className="text-sm font-semibold text-ink mb-3">Select Amount (USD)</p>
              <div className="grid grid-cols-4 gap-2 mb-3">
                {AMOUNTS.map(amt => (
                  <button key={amt} onClick={() => { setSelectedAmt(amt); setCustomAmt('') }}
                    className={`py-3 rounded-xl text-sm font-bold transition-all cursor-pointer border-2 ${
                      selectedAmt === amt && !customAmt
                        ? 'bg-navy text-white border-navy'
                        : 'bg-cream text-ink border-border hover:border-navy'
                    }`}>
                    ${amt}
                  </button>
                ))}
              </div>
              <input
                type="number"
                placeholder="Custom amount"
                value={customAmt}
                onChange={e => { setCustomAmt(e.target.value); setSelectedAmt(null) }}
                className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors mb-6"
              />

              {/* Donor info */}
              <div className="flex flex-col gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Full Name *</label>
                  <input value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                    placeholder="Your name"
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Email Address *</label>
                  <input type="email" value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                    placeholder="your@email.com"
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-ink mb-1.5">Message (optional)</label>
                  <textarea value={form.message} onChange={e => setForm(f => ({...f, message: e.target.value}))}
                    rows={3} placeholder="A word of encouragement..."
                    className="w-full bg-cream border border-border rounded-xl px-4 py-3 text-sm text-ink outline-none focus:border-navy transition-colors resize-none" />
                </div>
              </div>

              <button onClick={handleDonate}
                className="w-full bg-orange text-white rounded-xl py-4 font-bold text-base hover:bg-orange-dark transition-colors cursor-pointer border-0">
                Donate ${customAmt || selectedAmt || '—'} {type === 'monthly' ? '/ month' : 'Today'}
              </button>
              <p className="text-center text-muted text-xs mt-3">🔒 Secure &amp; encrypted. Your information is safe.</p>
            </div>

            {/* Why give */}
            <div>
              <span className="section-eyebrow">Your Impact</span>
              <h2 className="section-title mb-4">Where Your Money Goes</h2>
              <p className="text-muted mb-8 leading-relaxed">Every dollar goes directly to programs that transform young lives in Nyamirambo. Here's what your donation makes possible:</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: '💻', title: 'Digital Skills', desc: '$50 provides one month of ICT training for a young person, covering coding, design, and entrepreneurship.' },
                  { icon: '🏀', title: 'Sports Program', desc: '$100 equips a youth athlete with gear and covers their registration in our sports programs for a full term.' },
                  { icon: '📚', title: 'Education Support', desc: '$150 sponsors a youth through a full semester of language and literacy classes at our center.' },
                  { icon: '❤️', title: 'Girls Empowerment', desc: '$250 sponsors a girl through our entire Girl Up leadership and vocational training program.' },
                  { icon: '🕐', title: 'Lasting Change', desc: 'Monthly giving ensures we can plan long-term programs and create sustainable impact in Nyamirambo.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.05)]">
                    <div className="w-12 h-12 rounded-xl bg-orange-light flex items-center justify-center text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                      <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
