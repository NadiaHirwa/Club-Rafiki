import { useState } from 'react'

// ─── FORMSPREE FORM IDs ───────────────────────────────────────────────────────
// Steps to activate:
//  1. Go to https://formspree.io and sign in / create a free account
//  2. Click "New Form" → name it "Volunteer Form" → set email to clubrafikiictlab@gmail.com
//  3. Copy the form ID (looks like "xbjvkpqz") and paste it below
//  4. Repeat for "Partner Form"
const VOLUNTEER_FORM_ID = 'mwvanznp'   // ← replace this
const PARTNER_FORM_ID   = 'mgorlqlw'     // ← replace this

// ─── Shared helpers ───────────────────────────────────────────────────────────
const inputClass = 'w-full bg-[#F7F4EF] border border-[#E2DDD6] rounded-xl px-4 py-3 text-sm text-[#2C3E50] outline-none focus:border-[#1A3A6B] transition-colors placeholder-[#6B7A8D]'
const labelClass = 'block text-sm font-semibold text-[#2C3E50] mb-1.5'

function FieldIcon({ type }) {
  const base = 'w-4 h-4 stroke-[#6B7A8D] fill-none stroke-2 flex-shrink-0 mt-0.5'
  if (type === 'user') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  )
  if (type === 'email') return (
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
  if (type === 'clock') return (
    <svg viewBox="0 0 24 24" className={base}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
  if (type === 'briefcase') return (
    <svg viewBox="0 0 24 24" className={base}>
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
    </svg>
  )
  if (type === 'building') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  )
  if (type === 'handshake') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
    </svg>
  )
  if (type === 'message') return (
    <svg viewBox="0 0 24 24" className={base}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  )
  return null
}

// ─── Success screen ───────────────────────────────────────────────────────────
function SuccessScreen({ type, onClose }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-green-600 fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <h3 className="font-display text-2xl text-[#0F1C2E] mb-3">
        {type === 'volunteer' ? 'Application Received!' : 'Request Received!'}
      </h3>
      <p className="text-[#6B7A8D] leading-relaxed max-w-sm">
        {type === 'volunteer'
          ? 'Thank you for your interest in volunteering with Club Rafiki. Our team will review your application and get back to you at the email provided.'
          : 'Thank you for your interest in partnering with Club Rafiki. Our team will review your request and reach out to discuss next steps.'}
      </p>
      <button
        onClick={onClose}
        className="mt-8 bg-[#1A3A6B] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#122d55] transition-colors cursor-pointer border-0"
      >
        Close
      </button>
    </div>
  )
}

// ─── VOLUNTEER FORM ───────────────────────────────────────────────────────────
function VolunteerForm({ onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', availability: '', skills: '', motivation: '',
  })
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${VOLUNTEER_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Volunteer Application — ${form.name}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          availability: form.availability,
          skills: form.skills,
          motivation: form.motivation,
        }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <SuccessScreen type="volunteer" onClose={onClose} />

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Name + Email */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="user" /> Full Name <span className="text-[#E8541A]">*</span></span>
          </label>
          <input className={inputClass} value={form.name} onChange={set('name')} placeholder="Your full name" required />
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="email" /> Email Address <span className="text-[#E8541A]">*</span></span>
          </label>
          <input className={inputClass} type="email" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
        </div>
      </div>

      {/* Phone + Availability */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="phone" /> Phone Number</span>
          </label>
          <input className={inputClass} type="tel" value={form.phone} onChange={set('phone')} placeholder="+250 7XX XXX XXX" />
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="clock" /> Availability <span className="text-[#E8541A]">*</span></span>
          </label>
          <select className={inputClass} value={form.availability} onChange={set('availability')} required>
            <option value="">Select availability</option>
            <option value="Weekdays">Weekdays</option>
            <option value="Weekends">Weekends</option>
            <option value="Weekdays & Weekends">Weekdays &amp; Weekends</option>
            <option value="School holidays only">School holidays only</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
      </div>

      {/* Skills */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="briefcase" /> Skills &amp; Experience <span className="text-[#E8541A]">*</span></span>
        </label>
        <textarea
          className={`${inputClass} resize-none`} rows={3}
          value={form.skills} onChange={set('skills')}
          placeholder="e.g. Teaching, ICT, sports coaching, health education, design..."
          required
        />
      </div>

      {/* Motivation */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="message" /> Why do you want to volunteer? <span className="text-[#E8541A]">*</span></span>
        </label>
        <textarea
          className={`${inputClass} resize-none`} rows={4}
          value={form.motivation} onChange={set('motivation')}
          placeholder="Tell us why you want to volunteer with Club Rafiki and how you hope to contribute..."
          required
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none stroke-2 flex-shrink-0">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Something went wrong. Please try again or email us directly at clubrafikiictlab@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#E8541A] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#c94210] transition-colors cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin w-4 h-4 stroke-white fill-none stroke-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Submit Application
          </>
        )}
      </button>

      <p className="text-center text-[#6B7A8D] text-xs">
        Your application will be sent to <strong>clubrafikiictlab@gmail.com</strong>
      </p>
    </form>
  )
}

// ─── PARTNER FORM ─────────────────────────────────────────────────────────────
function PartnerForm({ onClose }) {
  const [form, setForm] = useState({
    orgName: '', contactPerson: '', email: '', partnerType: '', message: '',
  })
  const [status, setStatus] = useState('idle')

  const set = (key) => (e) => setForm(f => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const res = await fetch(`https://formspree.io/f/${PARTNER_FORM_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Partnership Request — ${form.orgName}`,
          organization_name: form.orgName,
          contact_person: form.contactPerson,
          email: form.email,
          partnership_type: form.partnerType,
          message: form.message,
        }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') return <SuccessScreen type="partner" onClose={onClose} />

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {/* Org Name + Contact Person */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="building" /> Organization Name <span className="text-[#E8541A]">*</span></span>
          </label>
          <input className={inputClass} value={form.orgName} onChange={set('orgName')} placeholder="Your organization" required />
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="user" /> Contact Person <span className="text-[#E8541A]">*</span></span>
          </label>
          <input className={inputClass} value={form.contactPerson} onChange={set('contactPerson')} placeholder="Full name" required />
        </div>
      </div>

      {/* Email + Partnership Type */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="email" /> Email Address <span className="text-[#E8541A]">*</span></span>
          </label>
          <input className={inputClass} type="email" value={form.email} onChange={set('email')} placeholder="contact@org.com" required />
        </div>
        <div>
          <label className={labelClass}>
            <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="handshake" /> Type of Partnership <span className="text-[#E8541A]">*</span></span>
          </label>
          <select className={inputClass} value={form.partnerType} onChange={set('partnerType')} required>
            <option value="">Select type</option>
            <option value="Financial / Donation">Financial / Donation</option>
            <option value="In-Kind Support">In-Kind Support (equipment, materials)</option>
            <option value="Technical Assistance">Technical Assistance</option>
            <option value="Training & Capacity Building">Training &amp; Capacity Building</option>
            <option value="Event Collaboration">Event Collaboration</option>
            <option value="Research / Documentation">Research / Documentation</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelClass}>
          <span className="flex items-center gap-1.5 mb-1.5"><FieldIcon type="message" /> Message <span className="text-[#E8541A]">*</span></span>
        </label>
        <textarea
          className={`${inputClass} resize-none`} rows={5}
          value={form.message} onChange={set('message')}
          placeholder="Describe your organization, what kind of partnership you have in mind, and how you hope to work with Club Rafiki..."
          required
        />
      </div>

      {status === 'error' && (
        <p className="text-red-600 text-sm bg-red-50 rounded-xl px-4 py-3 flex items-center gap-2">
          <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-red-600 fill-none stroke-2 flex-shrink-0">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          Something went wrong. Please try again or email us directly at clubrafikiictlab@gmail.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full bg-[#1A3A6B] text-white py-3.5 rounded-xl font-bold text-sm hover:bg-[#122d55] transition-colors cursor-pointer border-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-1"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin w-4 h-4 stroke-white fill-none stroke-2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10" />
            </svg>
            Submitting...
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
              <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
            Submit Partnership Request
          </>
        )}
      </button>

      <p className="text-center text-[#6B7A8D] text-xs">
        Your request will be sent to <strong>clubrafikiictlab@gmail.com</strong>
      </p>
    </form>
  )
}

// ─── MODAL WRAPPER ────────────────────────────────────────────────────────────
function Modal({ type, onClose }) {
  const isVolunteer = type === 'volunteer'

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[300] flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-xl my-6 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-8 pt-7 pb-5 border-b border-[#E2DDD6]">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isVolunteer ? 'bg-orange-light' : 'bg-navy-light'}`}>
              {isVolunteer ? (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#E8541A] fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#1A3A6B] fill-none stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"/>
                </svg>
              )}
            </div>
            <div>
              <h2 className="font-display text-xl text-[#0F1C2E]">
                {isVolunteer ? 'Volunteer Application' : 'Partner With Us'}
              </h2>
              <p className="text-[#6B7A8D] text-xs mt-0.5">
                {isVolunteer ? 'Join our team and make a difference' : 'Let\'s build something meaningful together'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#F7F4EF] hover:bg-[#E2DDD6] flex items-center justify-center transition-colors border-0 cursor-pointer flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-[#6B7A8D] fill-none stroke-2 [stroke-linecap:round]">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Form body */}
        <div className="px-8 py-6">
          {isVolunteer
            ? <VolunteerForm onClose={onClose} />
            : <PartnerForm onClose={onClose} />
          }
        </div>
      </div>
    </div>
  )
}

// ─── EXPORTED hook + trigger components ───────────────────────────────────────

// Hook — use this in any page that needs to open the modals
export function useFormModal() {
  const [modal, setModal] = useState(null) // null | 'volunteer' | 'partner'
  const openVolunteer = () => setModal('volunteer')
  const openPartner   = () => setModal('partner')
  const close         = () => setModal(null)
  const ModalComponent = modal ? <Modal type={modal} onClose={close} /> : null
  return { openVolunteer, openPartner, ModalComponent }
}

// Standalone button components for use anywhere in the app
export function VolunteerButton({ className = '', children }) {
  const { openVolunteer, ModalComponent } = useFormModal()
  return (
    <>
      <button onClick={openVolunteer} className={className}>{children || 'Volunteer'}</button>
      {ModalComponent}
    </>
  )
}

export function PartnerButton({ className = '', children }) {
  const { openPartner, ModalComponent } = useFormModal()
  return (
    <>
      <button onClick={openPartner} className={className}>{children || 'Partner With Us'}</button>
      {ModalComponent}
    </>
  )
}
