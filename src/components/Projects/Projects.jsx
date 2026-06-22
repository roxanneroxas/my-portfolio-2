import React, { useState } from 'react'
import { projects } from '../../data/staticData'
import './Projects.css'

const ALL = 'All'
const categories = [ALL, ...new Set(projects.map(p => p.category))]

export default function Projects() {
  const [active, setActive] = useState(ALL)
  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)

  return (
    <main className="projects-page">
      <section className="proj-section">
        <div className="container">
          <p className="section-label">What I've Built</p>
          <h1 className="section-title">My Projects</h1>
          <p className="proj-sub">A collection of {projects.length} projects across web, mobile, desktop, networking, and more.</p>

          <div className="proj-filters">
            {categories.map(cat => (
              <button key={cat} className={`proj-filter ${active === cat ? 'active' : ''}`} onClick={() => setActive(cat)}>
                {cat}
              </button>
            ))}
          </div>

          <div className="proj-grid">
            {filtered.map(proj => (
              <div className="proj-card card" key={proj.id}>
                <div className="proj-thumb">
                  <img src={proj.image} alt={proj.title} onError={e => { e.currentTarget.style.display = 'none' }} />
                  <div className="proj-cat-badge">{proj.category}</div>
                </div>
                <div className="proj-body">
                  <h3 className="proj-title">{proj.title}</h3>
                  <div className="proj-tags">
                    {proj.tech.map(t => <span key={t} className="skill-pill">{t}</span>)}
                  </div>
                  <p className="proj-desc">{proj.description}</p>
                  <div className="proj-links">
                    {proj.github && <a href={proj.github} target="_blank" rel="noreferrer" className="proj-link">GitHub →</a>}
                    {proj.demo && <a href={proj.demo} target="_blank" rel="noreferrer" className="proj-link proj-link--demo">Live Demo →</a>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}