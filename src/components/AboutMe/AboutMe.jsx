import React from 'react'
import { profile, education, achievements } from '../../data/staticData'
import { School, BookOpen, GraduationCap, Landmark, Award, Star, FileCheck, Shield } from 'lucide-react'
import Stack from '../Stack/Stack'
import togaImg from '../../assets/toga.png'
import filipinianaImg from '../../assets/filipiniana.png'
import './AboutMe.css'

const photoCards = [
  <img src={togaImg}        alt="Toga"        className="card-image" />,
  <img src={filipinianaImg} alt="Filipiniana" className="card-image" />,
]

const eduIconMap = {
  school:        <School size={22} strokeWidth={1.8} />,
  bookopen:      <BookOpen size={22} strokeWidth={1.8} />,
  graduationcap: <GraduationCap size={22} strokeWidth={1.8} />,
  landmark:      <Landmark size={22} strokeWidth={1.8} />,
}

const achIconMap = [
  <Award size={22} strokeWidth={1.8} />,
  <Star size={22} strokeWidth={1.8} />,
  <FileCheck size={22} strokeWidth={1.8} />,
  <Shield size={22} strokeWidth={1.8} />,
]

export default function AboutMe() {
  return (
    <main className="aboutme-page">
      <section className="am-hero">
        <div className="container am-hero-inner">

          <div className="am-photo-side">
            <div className="am-stack-frame">
              <Stack
                cards={photoCards}
                sendToBackOnClick={true}
                randomRotation={true}
                animationConfig={{ stiffness: 260, damping: 20 }}
              />
            </div>
          </div>

          <div className="am-intro">
            <p className="section-label">Profile</p>
            <h1 className="am-name">
              Hello, I'm <span className="gradient-text">Roxanne Roxas</span>
            </h1>

            <div className="am-badge-row">
              <span className="am-badge">🎓 Magna Cum Laude</span>
              <span className="am-badge">💼 Junior Software Engineer</span>
            </div>

            <p className="am-bio">{profile.shortBio}</p>

            <div className="am-divider" />

            <ul className="am-contacts">
              <li>
                <span className="am-c-icon">✉️</span>
                <div className="am-c-info">
                  <span className="am-c-label">Personal Email</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </div>
              </li>
              <li>
                <span className="am-c-icon">💼</span>
                <div className="am-c-info">
                  <span className="am-c-label">Work Email</span>
                  <a href={`mailto:${profile.businessEmail}`}>{profile.businessEmail}</a>
                </div>
              </li>
              <li>
                <span className="am-c-icon">📱</span>
                <div className="am-c-info">
                  <span className="am-c-label">Phone</span>
                  <span>{profile.phone}</span>
                </div>
              </li>
              <li>
                <span className="am-c-icon">📍</span>
                <div className="am-c-info">
                  <span className="am-c-label">Location</span>
                  <span>{profile.address}</span>
                </div>
              </li>
              <li>
                <span className="am-c-icon">🔗</span>
                <div className="am-c-info">
                  <span className="am-c-label">LinkedIn</span>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinLabel}</a>
                </div>
              </li>
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
                  <span className="edu-dot-icon">
                    {eduIconMap[e.icon]}
                  </span>
                  {i < education.length - 1 && <div className="edu-line" />}
                </div>
                <div className="edu-body card">
                  <div className="edu-body-top">
                    <div className="edu-left">
                      <h3 className="edu-level">{e.level}</h3>
                      {e.school && <p className="edu-school">{e.school}</p>}
                    </div>
                    <div className="edu-right">
                      {e.period && <span className="edu-period-badge">{e.period}</span>}
                      <span className="edu-honor-badge">🏆 {e.honor}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="am-section am-section--sm">
        <div className="container">
          <p className="section-label">Recognition</p>
          <h2 className="section-title">Achievements & Certifications</h2>
          <div className="ach-grid">
            {achievements.map((a, i) => (
              <div className="ach-card card" key={i}>
                <span className="ach-medal">
                  {achIconMap[i] ?? <Award size={22} strokeWidth={1.8} />}
                </span>
                <p>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}