import React from 'react'
import { skills } from '../../data/staticData'
import {
  FaCode, FaGlobe, FaShieldAlt, FaGamepad,
  FaTools, FaHandshake, FaDatabase, FaBolt,
  FaPuzzlePiece, FaWrench, FaLightbulb,
  FaMapMarkerAlt, FaCalendarAlt, FaUserTie
} from 'react-icons/fa'
import './Skills.css'

const categoryIcons = {
  'Programming':           <FaCode />,
  'Web Development':       <FaGlobe />,
  'Backend & API':         <FaBolt />,
  'Database':              <FaDatabase />,
  'Networking & Security': <FaShieldAlt />,
  'Game Development':      <FaGamepad />,
  'Tools':                 <FaTools />,
  'Soft Skills':           <FaHandshake />,
}

const techDetails = [
  {
    icon: <FaPuzzlePiece />,
    category: 'Languages & Frameworks',
    items: [
      'React', 'JSX', 'JavaScript', 'PHP',
      'Laravel', 'Tailwind CSS', 'HTML', 'CSS', 'Vue.js',
    ],
  },
  {
    icon: <FaWrench />,
    category: 'Tools & Platforms',
    items: [
      'GitHub', 'Postman', 'HeidiSQL',
      'Laravel Reverb', 'N8N', 'Zuora', 'Git', 'VS Code',
    ],
  },
  {
    icon: <FaLightbulb />,
    category: 'Concepts & Practices',
    items: [
      'API Integration', 'WebSockets', 'Component Architecture',
      'Responsive Design', 'Full-Stack Development',
      'CRUD Operations', 'Database Design',
      'Version Control', 'System Debugging',
    ],
  },
]

const workExperience = [
  {
    role: 'Web Development Intern',
    company: 'ViewQwest Philippines, Inc.',
    supervisor: 'Mr. John Salonga — Information Systems Manager',
    period: 'January 19, 2026 – April 24, 2026',
    hours: '500 Hours',
    location: 'LDN Building, McArthur Highway, Malolos, Bulacan',
    bullets: [
      'Built and refined React/JSX frontend components for multiple internal platforms, including cybersecurity service pages, support and FAQ sections, and residential broadband interfaces.',
      'Integrated frontend components with Laravel backend APIs to ensure accurate data flow across internal dashboards and system modules.',
      'Performed a full framework migration from Laravel 9 to Laravel 12, executing system upgrades and database migrations that improved overall application performance.',
      'Implemented real-time event handling using Laravel Reverb WebSockets, enabling live progress bars and dynamic notifications across the system.',
      'Built a CSV import system with multi-layer validation, transaction handling, and logging to ensure accurate and reliable data processing.',
      'Designed and implemented calendar-based filters integrated with backend APIs for dynamic day, week, month, and year data retrieval.',
      'Used Postman to test and validate API endpoints, diagnosing integration gaps between backend responses and frontend rendering.',
      'Converted traditional CSS styling to Tailwind CSS, improving design consistency and simplifying the overall styling workflow.',
      'Managed source code changes and collaboration using Git and GitHub throughout the entire training period.',
    ],
  },
]

export default function Skills() {
  return (
    <main className="skills-page">

      {/* ── HERO ── */}
      <section className="sk-hero">
        <div className="sk-hero-glow" />
        <div className="container">
          <p className="section-label">Technical Expertise</p>
          <h1 className="section-title sk-hero-title">My Skills</h1>
          <p className="sk-sub">
            Technologies and tools I've worked with across academic projects,
            personal development, and 500 hours of hands-on professional experience
            at ViewQwest Philippines, Inc.
          </p>
        </div>
      </section>

      {/* ── CORE SKILLS ── */}
      <section className="sk-section">
        <div className="container">
          <div className="sk-section-head">
            <p className="section-label">Overview</p>
            <h2 className="section-title">Core Skill Areas</h2>
          </div>
          <div className="sk-grid">
            {Object.entries(skills).map(([cat, items]) => (
              <div className="sk-cat card" key={cat}>
                <div className="sk-cat-head">
                  <span className="sk-icon">{categoryIcons[cat] || <FaBolt />}</span>
                  <h3 className="sk-cat-name">{cat}</h3>
                </div>
                <div className="sk-pills">
                  {items.map(s => <span className="sk-pill" key={s}>{s}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNICAL PROFICIENCIES ── */}
      <section className="sk-section sk-section--alt">
        <div className="container">
          <div className="sk-section-head">
            <p className="section-label">In Detail</p>
            <h2 className="section-title">Technical Proficiencies</h2>
          </div>
          <div className="sk-detail-grid">
            {techDetails.map(group => (
              <div className="sk-detail-card card" key={group.category}>
                <div className="sk-detail-top">
                  <span className="sk-icon sk-icon--lg">{group.icon}</span>
                  <h3 className="sk-cat-name">{group.category}</h3>
                </div>
                <div className="sk-pills">
                  {group.items.map(item => (
                    <span className="sk-pill" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <section className="sk-section">
        <div className="container">
          <div className="sk-section-head">
            <p className="section-label">Experience</p>
            <h2 className="section-title">Work Experience</h2>
          </div>
          <div className="sk-exp-list">
            {workExperience.map((job, i) => (
              <div className="sk-exp-card card" key={i}>
                <div className="sk-exp-header">
                  <div>
                    <h3 className="sk-exp-role">{job.role}</h3>
                    <p className="sk-exp-company">{job.company}</p>
                    <p className="sk-exp-supervisor">
                      <FaUserTie className="sk-meta-icon" />
                      {job.supervisor}
                    </p>
                  </div>
                  <div className="sk-exp-meta">
                    <span className="sk-exp-badge">
                      <FaCalendarAlt className="sk-meta-icon" />
                      {job.period}
                    </span>
                    <span className="sk-exp-badge">
                      <FaBolt className="sk-meta-icon" />
                      {job.hours}
                    </span>
                    <span className="sk-exp-badge">
                      <FaMapMarkerAlt className="sk-meta-icon" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <ul className="sk-exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}