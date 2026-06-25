import React, { useState } from 'react'
import { profile } from '../../data/staticData'
import './ContactPage.css'
import { Mail, Phone, MapPin, ExternalLink, GitFork } from 'lucide-react'
import emailjs from '@emailjs/browser'
emailjs.init('ILJx2OdUM_cafwinA')

const SERVICE_ID  = 'service_a68fwe3'
const TEMPLATE_CONTACT  = 'template_kpic359'
const TEMPLATE_AUTOREPLY = 'template_ua33mw6'

const INFO = [
  { icon: <Mail size={20} strokeWidth={1.8} />,        label: 'Email',    value: profile.email,   href: `mailto:${profile.email}` },
  { icon: <Phone size={20} strokeWidth={1.8} />,       label: 'Phone',    value: profile.phone,   href: `tel:${profile.phone}` },
  { icon: <MapPin size={20} strokeWidth={1.8} />,      label: 'Location', value: profile.address, href: null },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'
  const [focused, setFocused] = useState(null)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

 const handleSubmit = async e => {
  e.preventDefault()
  setStatus('sending')

  const templateParams = {
    name:    form.name,
    email:   form.email,
    title:   form.subject,
    message: form.message,
  }

  try {
    const res1 = await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT, templateParams)
    console.log('Contact email result:', res1)

    const res2 = await emailjs.send(SERVICE_ID, TEMPLATE_AUTOREPLY, {
      name:  form.name,
      email: form.email,
    })
    console.log('Autoreply result:', res2)

    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setStatus(null), 5000)

  } catch (err) {
    console.error('EmailJS error status:', err.status)
    console.error('EmailJS error text:', err.text)
    console.error('Full error:', err)
    setStatus('error')
    setTimeout(() => setStatus(null), 5000)
  }
}

  return (
    <main className="contact-page">
      <div className="cp-bg-orb cp-orb-1" />
      <div className="cp-bg-orb cp-orb-2" />

      <section className="cp-section">
        <div className="container cp-inner">

          {/* LEFT */}
          <div className="cp-left">
            <p className="section-label">Let's Talk</p>
            <h1 className="section-title cp-heading">Get in<br /><span className="cp-heading-accent">Touch</span></h1>
            <p className="cp-intro">Whether you have a project idea, a question, or just want to say hi — my inbox is always open.</p>

            <div className="cp-info-list">
              {INFO.map(item => (
                <div className="cp-info-item" key={item.label}>
                  <div className="cp-info-icon">{item.icon}</div>
                  <div>
                    <p className="cp-info-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="cp-info-val cp-info-link">{item.value}</a>
                      : <p className="cp-info-val">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="cp-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="cp-social">
                <ExternalLink size={16} strokeWidth={1.8} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="cp-social">
                <GitFork size={16} strokeWidth={1.8} /> GitHub
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="cp-right">
            <div className="cp-form-card">
              <div className="cp-form-header">
                <h3 className="cp-form-title">Send a Message</h3>
                <p className="cp-form-sub">I'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="cp-form">
                <div className="cp-row">
                  <div className={`cp-field ${focused === 'name' ? 'focused' : ''} ${form.name ? 'filled' : ''}`}>
                    <label>Your Name</label>
                    <input
                      type="text" name="name" placeholder="First Name Last Name"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                  <div className={`cp-field ${focused === 'email' ? 'focused' : ''} ${form.email ? 'filled' : ''}`}>
                    <label>Your Email</label>
                    <input
                      type="email" name="email" placeholder="hello@example.com"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      required
                    />
                  </div>
                </div>

                <div className={`cp-field ${focused === 'subject' ? 'focused' : ''} ${form.subject ? 'filled' : ''}`}>
                  <label>Subject</label>
                  <input
                    type="text" name="subject" placeholder="What's this about?"
                    value={form.subject} onChange={handleChange}
                    onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                  />
                </div>

                <div className={`cp-field ${focused === 'message' ? 'focused' : ''} ${form.message ? 'filled' : ''}`}>
                  <label>Your Message</label>
                  <textarea
                    name="message" placeholder="Tell me about your project or idea..."
                    rows={5} value={form.message} onChange={handleChange}
                    onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="cp-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    <span>Sending…</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="cp-success">
                    ✅ Message sent! I'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div className="cp-error">
                    ❌ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}