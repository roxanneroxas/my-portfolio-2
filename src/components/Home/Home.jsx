import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ReactTyped } from 'react-typed'
import { Mail, Briefcase, Link as LinkIcon, GitFork } from 'lucide-react'
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'
import {
  SiReact, SiJavascript, SiPhp, SiPython, SiHtml5,
  SiMysql, SiGit, SiNodedotjs, SiWordpress,
  SiGodotengine, SiGithub, SiVite, SiKotlin, SiAndroid,
  SiPostman, SiLaravel, SiVuedotjs, SiTailwindcss
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
    const W = 612, H = 580
    const canvas = document.createElement('canvas')
    canvas.width = W; canvas.height = H
    const ctx = canvas.getContext('2d')

    const draw = (img) => {
      ctx.fillStyle = '#0e0618'
      ctx.fillRect(0, 0, W, H)

      const topGrad = ctx.createLinearGradient(0, 0, W, 0)
      topGrad.addColorStop(0, '#7f00ff')
      topGrad.addColorStop(1, '#a970ff')
      ctx.fillStyle = topGrad
      ctx.fillRect(0, 0, W, 8)

      ctx.strokeStyle = 'rgba(169,112,255,0.35)'
      ctx.lineWidth = 2
      ctx.strokeRect(1, 1, W - 2, H - 2)

      const CX = W * 0.25
      const LEFT = 10
      const RIGHT = W * 0.58

      // header
      ctx.fillStyle = 'rgba(169,112,255,0.6)'
      ctx.font = 'bold 20px Arial'
      ctx.textAlign = 'center'
      ctx.letterSpacing = '6px'
      ctx.fillText('KIRBY', CX, 60)

      // divider
      ctx.strokeStyle = 'rgba(169,112,255,0.4)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(LEFT, 80)
      ctx.lineTo(RIGHT, 80)
      ctx.stroke()

      // photo
      const imgSize = 140
      const imgX = CX - imgSize / 2
      const imgY = 100
      const radius = 12

      ctx.save()
      ctx.beginPath()
      ctx.roundRect(imgX, imgY, imgSize, imgSize, radius)
      ctx.clip()
      if (img) {
        // object-fit: cover — crop to square from center
      const iw = img.width || img.naturalWidth
      const ih = img.height || img.naturalHeight
      const scale = Math.max(imgSize / iw, imgSize / ih)
      const scaledW = iw * scale
      const scaledH = ih * scale
      const offsetX = imgX + (imgSize - scaledW) / 2
      const offsetY = imgY + (imgSize - scaledH) / 2
        ctx.drawImage(img, offsetX, offsetY, scaledW, scaledH)
      } else {
        ctx.fillStyle = '#2a1045'
        ctx.fillRect(imgX, imgY, imgSize, imgSize)
      }
      ctx.restore()

      ctx.strokeStyle = '#a970ff'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.roundRect(imgX, imgY, imgSize, imgSize, radius)
      ctx.stroke()

      // name
      ctx.fillStyle = '#ffffff'
      ctx.font = 'bold 22px Arial'
      ctx.textAlign = 'center'
      ctx.letterSpacing = '0px'
      ctx.fillText('Roxanne Roxas', CX, 285)

      // role
      ctx.fillStyle = '#a970ff'
      ctx.font = '14px Arial'
      ctx.fillText('Junior Software Engineer', CX, 312)

      // divider
      ctx.strokeStyle = 'rgba(169,112,255,0.4)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(LEFT, 335)
      ctx.lineTo(RIGHT, 335)
      ctx.stroke()

      // batch box
      const bw = RIGHT - LEFT
      const bh = 50
      const bx = 355
      const by = 355

      ctx.fillStyle = 'rgba(169,112,255,0.1)'
      ctx.beginPath()
      ctx.roundRect(bx, by, bw, bh, 10)
      ctx.fill()
      ctx.strokeStyle = 'rgba(169,112,255,0.25)'
      ctx.lineWidth = 1
      ctx.stroke()

      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.font = 'bold 16px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Batch 2026', CX, by + 32)

      // bottom bar
      const botGrad = ctx.createLinearGradient(0, 0, W, 0)
      botGrad.addColorStop(0, '#7f00ff')
      botGrad.addColorStop(1, '#a970ff')
      ctx.fillStyle = botGrad
      ctx.fillRect(0, H - 8, W, 8)

      // flip for Three.js UV
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
            startDelay={300}
            // Add this:
            typedRef={(typed) => {
              if (typed) typed.start();
            }}
          />
        </h1>
          <h2 className="title">{profile.tagline}</h2>
          <p className="subtitle">{profile.title}</p>
          <div className="hero-buttons">
            <button className="cta-btn" onClick={() => navigate('/about-me')}>View About Me</button>
            <button className="cta-btn secondary" onClick={() => window.open(resumePDF, '_blank')}>My Resume</button>
          </div>
          <div className="social-icons">
            <a href={profile.github} target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://www.facebook.com/rxsroxanne17" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href={`mailto:${profile.email}`} target="_blank" rel="noreferrer"><FaEnvelope /></a>
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    buildIDCardTexture(profilePic).then(setCardTex)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
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
            position={isMobile ? [0, 0, 20] : [0, 0, 8]}
            gravity={[0, -20, 0]}
            fov={isMobile ? 35 : 40}
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
    { icon: <SiReact />,        title: 'React' },
    { icon: <SiJavascript />,   title: 'JavaScript' },
    { icon: <SiVuedotjs />,     title: 'Vue.js' },
    { icon: <SiLaravel />,      title: 'Laravel' },
    { icon: <SiTailwindcss />,  title: 'Tailwind CSS' },
    { icon: <SiHtml5 />,        title: 'HTML5' },
    { icon: <SiPhp />,          title: 'PHP' },
    { icon: <SiPython />,       title: 'Python' },
    { icon: <SiMysql />,        title: 'MySQL' },
    { icon: <SiGit />,          title: 'Git' },
    { icon: <SiNodedotjs />,    title: 'Node.js' },
    { icon: <SiWordpress />,    title: 'WordPress' },
    { icon: <SiGodotengine />,  title: 'Godot' },
    { icon: <SiGithub />,       title: 'GitHub' },
    { icon: <SiVite />,         title: 'Vite' },
    { icon: <SiKotlin />,       title: 'Kotlin' },
    { icon: <SiAndroid />,      title: 'Android' },
    { icon: <SiPostman />,      title: 'Postman' },
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
  { 
    icon: <Mail size={28} strokeWidth={1.6} />,
    label: 'Personal Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    action: 'Send me an email →'
  },
  { 
    icon: <Briefcase size={28} strokeWidth={1.6} />,
    label: 'Work Email',
    value: profile.businessEmail,
    href: `mailto:${profile.businessEmail}`,
    action: 'Reach me at work →'
  },
  { 
    icon: <LinkIcon size={28} strokeWidth={1.6} />,
    label: 'LinkedIn',
    value: profile.linkedinLabel,
    href: profile.linkedin,
    action: 'Connect with me →'
  },
  { 
    icon: <GitFork size={28} strokeWidth={1.6} />,
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    action: 'View my repos →'
  },
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
            <span className="cc-action">{item.action}</span>
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