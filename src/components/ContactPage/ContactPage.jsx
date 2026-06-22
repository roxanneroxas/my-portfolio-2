import React, { useState } from 'react'
import { profile } from '../../data/staticData'
import './ContactPage.css'

const INFO = [
  { icon: '✉️', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: '📱', label: 'Phone', value: profile.phone, href: `tel:${profile.phone}` },
  { icon: '📍', label: 'Location', value: profile.address, href: null },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const sub = encodeURIComponent(form.subject || `Message from ${form.name}`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)
    window.location.href = `mailto:${profile.email}?subject=${sub}&body=${body}`
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <main className="contact-page">
      <section className="cp-section">
        <div className="container cp-inner">
          <div className="cp-left">
            <p className="section-label">Let's Talk</p>
            <h1 className="section-title">Get in Touch</h1>
            <p className="cp-intro">I'd love to hear from you! Whether you have a project idea, a question, or just want to say hi, feel free to drop a message.</p>

            <div className="cp-info-list">
              {INFO.map(item => (
                <div className="cp-info-item" key={item.label}>
                  <div className="cp-info-icon">{item.icon}</div>
                  <div>
                    <p className="cp-info-label">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="cp-info-val">{item.value}</a>
                      : <p className="cp-info-val">{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div className="cp-socials">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="cp-social">🔗 LinkedIn</a>
              <a href={profile.github} target="_blank" rel="noreferrer" className="cp-social">🐙 GitHub</a>
            </div>
          </div>

          <div className="cp-right">
            <div className="card cp-form-card">
              <h3 className="cp-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="cp-form">
                <div className="cp-row">
                  <div className="cp-field">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="cp-field">
                    <label>Your Email</label>
                    <input type="email" name="email" placeholder="Your Email" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="cp-field">
                  <label>Subject</label>
                  <input type="text" name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
                </div>
                <div className="cp-field">
                  <label>Your Message</label>
                  <textarea name="message" placeholder="Your Message..." rows={5} value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary cp-submit">Send Message ✈️</button>
                {sent && <p className="cp-success">✅ Opening your mail client…</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}