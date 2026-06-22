import React from 'react'
import { profile, education, achievements } from '../../data/staticData'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <main className="aboutme-page">
      <section className="am-hero">
        <div className="container am-hero-inner">
          <div className="am-avatar">
            <div className="am-avatar-ring" />
            <div className="am-avatar-core">RR</div>
          </div>
          <div className="am-intro">
            <p className="section-label">Profile</p>
            <h1 className="am-name">Hello, I'm <span className="gradient-text">Roxanne Roxas</span></h1>
            <p className="am-title">{profile.title}</p>
            <p className="am-bio">{profile.shortBio}</p>
            <ul className="am-contacts">
              <li><span className="am-c-icon">✉️</span><a href={`mailto:${profile.email}`}>{profile.email}</a></li>
              <li><span className="am-c-icon">📱</span><span>{profile.phone}</span></li>
              <li><span className="am-c-icon">📍</span><span>{profile.address}</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="am-section">
        <div className="container">
          <p className="section-label">Academic Journey</p>
          <h2 className="section-title">Education</h2>
          <div className="edu-timeline">
            {education.map((e, i) => (
              <div className="edu-item" key={e.id}>
                <div className="edu-dot">
                  <span>{e.icon}</span>
                  {i < education.length - 1 && <div className="edu-line" />}
                </div>
                <div className="edu-body card">
                  <h3 className="edu-level">{e.level}</h3>
                  {e.school && <p className="edu-school">{e.school}</p>}
                  {e.period && <p className="edu-period">{e.period}</p>}
                  <p className="edu-honor">🏆 {e.honor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="am-section am-section--sm">
        <div className="container">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <div className="ach-grid">
            {achievements.map((a, i) => (
              <div className="ach-card card" key={i}>
                <span className="ach-medal">🏅</span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}