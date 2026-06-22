import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import {
  SiReact, SiJavascript, SiPhp, SiPython, SiHtml5,
  SiMysql, SiGit, SiNodedotjs, SiWordpress,
  SiGodotengine, SiGithub, SiVite, SiKotlin, SiAndroid,
  SiPostman, SiLaravel
} from 'react-icons/si'
import * as THREE from 'three'
import { profile, skills } from '../../data/staticData'
import MetaBalls from '../MetaBalls/MetaBalls'
import Lanyard from '../Lanyard/Lanyard'
import profilePic from '../../assets/me.png'
import resumePDF from '../../assets/Resume.pdf'
import './Home.css'

function buildIDCardTexture(imageSrc) {
  return new Promise(resolve => {
    const W = 512, H = 716
    const canvas = document.createElement('canvas')
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')

    const draw = (img) => {
      // ── background ──
      ctx.fillStyle = '#0e0618'
      ctx.fillRect(0, 0, W, H)

      // ── top gradient bar ──
      const topGrad = ctx.createLinearGradient(0, 0, W, 0)
      topGrad.addColorStop(0, '#7f00ff')
      topGrad.addColorStop(1, '#a970ff')
      ctx.fillStyle = topGrad
      ctx.fillRect(0, 0, W, 8)

      // ── card border glow ──
      ctx.strokeStyle = 'rgba(169,112,255,0.35)'
      ctx.lineWidth = 2
      ctx.strokeRect(1, 1, W - 2, H - 2)

      // ── header label ──
      ctx.fillStyle = 'rgba(169,112,255,0.6)'
      ctx.font = 'bold 13px Arial'
      ctx.textAlign = 'center'
      ctx.letterSpacing = '3px'
      ctx.fillText('PORTFOLIO ID', W / 2, 48)

      // ── squared photo ──
      const imgSize = 160
      const imgX = (W - imgSize) / 2
      const imgY = 80
      const radius = 16

      // rounded square clip
      ctx.save()
      ctx.beginPath()
      ctx.roundRect(imgX, imgY, imgSize, imgSize, radius)
      ctx.clip()
      if (img) ctx.drawImage(img, imgX, imgY, imgSize, imgSize)
      else { ctx.fillStyle = '#2a1045'; ctx.fillRect(imgX, imgY, imgSize, imgSize) }
      ctx.restore()

      // photo border
      ctx.strokeStyle = '#a970ff'
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.roundRect(imgX, imgY, imgSize, imgSize, radius)
      ctx.stroke()

      // ── name ──
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 30px Arial'
      ctx.textAlign = 'center'
      ctx.letterSpacing = '1px'
      ctx.fillText('ROXANNE ROXAS', W / 2, 290)

      // ── role ──
      ctx.fillStyle = '#a970ff'
      ctx.font = '16px Arial'
      ctx.letterSpacing = '0px'
      ctx.fillText('BSIT Graduate · Web Developer', W / 2, 322)

      // ── divider ──
      const div = ctx.createLinearGradient(60, 0, W - 60, 0)
      div.addColorStop(0, 'transparent')
      div.addColorStop(0.5, 'rgba(169,112,255,0.5)')
      div.addColorStop(1, 'transparent')
      ctx.strokeStyle = div; ctx.lineWidth = 1
      ctx.beginPath(); ctx.moveTo(60, 348); ctx.lineTo(W - 60, 348); ctx.stroke()

      // ── details ──
      const details = [
        { label: 'Magna Cum Laude' },
        { label: '4× Dean\'s Lister' },
        { label: '10 Projects Completed' },
        { label: 'Class of 2026' },
      ]

      details.forEach((d, i) => {
        const y = 400 + i * 72
        const bw = 340, bh = 54
        const bx = (W - bw) / 2

        // row bg
        ctx.fillStyle = 'rgba(169,112,255,0.08)'
        ctx.beginPath()
        ctx.roundRect(bx, y - 30, bw, bh, 10)
        ctx.fill()
        ctx.strokeStyle = 'rgba(169,112,255,0.2)'; ctx.lineWidth = 1
        ctx.stroke()

        // label
        ctx.fillStyle = 'rgba(255,255,255,0.85)'
        ctx.font = '18px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(d.label, W / 2, y + 2)
      })

      // ── bottom bar ──
      const botGrad = ctx.createLinearGradient(0, 0, W, 0)
      botGrad.addColorStop(0, '#7f00ff')
      botGrad.addColorStop(1, '#a970ff')
      ctx.fillStyle = botGrad
      ctx.fillRect(0, H - 8, W, 8)

      // ── flip vertically for Three.js UV ──
      const flipped = document.createElement('canvas')
      flipped.width = W; flipped.height = H
      const fctx = flipped.getContext('2d')
      fctx.translate(0, H)
      fctx.scale(1, -1)
      fctx.drawImage(canvas, 0, 0)
      resolve(new THREE.CanvasTexture(flipped))
    }

    if (imageSrc) {
      const img = new Image()
      img.crossOrigin = 'anonymous'
      img.onload = () => draw(img)
      img.onerror = () => draw(null)
      img.src = imageSrc
    } else {
      draw(null)
    }
  })
}
function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-container">
        <div className="hero-left">
          <p className="greeting">WELCOME TO MY PORTFOLIO</p>
          <h1 className="name">
            <ReactTyped
              strings={["Hi, I'm <span class='highlight'>Roxanne Roxas</span>"]}
              typeSpeed={70}
              backSpeed={40}
              backDelay={1500}
              showCursor={true}
              cursorChar="|"
              loop={true}
              contentType="html"
            />
          </h1>
          <h2 className="title">BSIT Graduate</h2>
          <p className="subtitle">Aspiring IT Professional | Web Developer</p>
          <div className="hero-buttons">
            <button className="cta-btn" onClick={() => navigate('/about-me')}>View About Me</button>
            <button className="cta-btn secondary" onClick={() => window.open(resumePDF, '_blank')}>My Resume</button>
          </div>
          <div className="social-icons">
            <a href="https://github.com/roxannroxas" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/roxanne-roxas-758977382/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/rxsroxanne17" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=roxanne.roxas@email.lcup.edu.ph" target="_blank" rel="noreferrer"><FaEnvelope /></a>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-blob-bg">
            <MetaBalls
              color="#bd73ff"
              cursorBallColor="#bd73ff"
              cursorBallSize={2}
              ballCount={15}
              animationSize={30}
              enableMouseInteraction={true}
              enableTransparency={true}
              hoverSmoothness={0.05}
              clumpFactor={1}
              speed={0.3}
            />
          </div>
          <img src={profilePic} alt="Profile" className="hero-img" />
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const [cardTex, setCardTex] = useState(null)

  useEffect(() => {
    buildIDCardTexture(profilePic).then(setCardTex)
  }, [])

  return (
    <section className="home-about" id="about">
      <div className="container home-about-inner">
        <div className="home-about-text">
          <p className="section-label">Who Am I?</p>
          {profile.bio.split('\n\n').map((p, i) => (
            <p key={i} className="home-about-para">{p}</p>
          ))}
          <Link to="/projects" className="btn btn-primary" style={{ marginTop: '2rem' }}>
            Show My Projects
          </Link>
        </div>
        <div className="home-about-lanyard">
<Lanyard
  position={[0, 0, 8]}  
  gravity={[0, -40, 0]}
  fov={40}              
  transparent={true}
  cardTexture={cardTex}
/>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
const tickerIcons = [
  { icon: <SiReact />,       title: 'React' },
  { icon: <SiJavascript />,  title: 'JavaScript' },
  { icon: <SiPhp />,         title: 'PHP' },
  { icon: <SiPython />,      title: 'Python' },
  { icon: <SiHtml5 />,       title: 'HTML5' },
  { icon: <SiMysql />,       title: 'MySQL' },
  { icon: <SiGit />,         title: 'Git' },
  { icon: <SiNodedotjs />,   title: 'Node.js' },
  { icon: <SiWordpress />,   title: 'WordPress' },
  { icon: <SiGodotengine />, title: 'Godot' },
  { icon: <SiGithub />,      title: 'GitHub' },
  { icon: <SiVite />,        title: 'Vite' },
  { icon: <SiKotlin />,      title: 'Kotlin' },
  { icon: <SiAndroid />,     title: 'Android' },
  { icon: <SiPostman />,     title: 'Postman' },
  { icon: <SiLaravel />,     title: 'Laravel' },
]
  const doubled = [...tickerIcons, ...tickerIcons]

  return (
    <section className="home-skills" id="skills">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>What I Know</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>My Skills</h2>

        <div className="skills-ticker">
          <div className="ticker-track">
            {doubled.map((item, i) => (
              <div className="ticker-item" key={i} title={item.title}>
                {item.icon}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([cat, items]) => (
            <div className="skill-cat card" key={cat}>
              <h3 className="skill-cat-name">{cat}</h3>
              <div className="skill-pills">
                {items.map(sk => <span className="skill-pill" key={sk}>{sk}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  const items = [
    { icon: '✉️', label: 'Email',    value: profile.email,       href: `mailto:${profile.email}` },
    { icon: '🔗', label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
    { icon: '🐙', label: 'GitHub',   value: profile.githubLabel,   href: profile.github },
  ]
  return (
    <section className="home-contact" id="contact">
      <div className="container">
        <p className="section-label" style={{ textAlign: 'center' }}>Let's Talk</p>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Contact Me</h2>
        <div className="contact-cards">
          {items.map(item => (
            <a key={item.label} href={item.href}
              target={item.href.startsWith('mailto') ? undefined : '_blank'}
              rel="noreferrer" className="contact-card card">
              <div className="cc-icon">{item.icon}</div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
              <span className="cc-action">Send me a message →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}