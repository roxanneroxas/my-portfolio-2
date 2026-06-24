import React from 'react'
import { Link } from 'react-router-dom'
import { profile } from '../../data/staticData'
import './Footer.css'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  const year = new Date().getFullYear()
 return (
  <footer className="footer">
    <div className="container footer-inner">

      <div className="footer-brand">
        <Link to="/" className="footer-logo">Kirby<span className="footer-dot">.</span></Link>
        <p className="footer-tagline">{profile.shortBio}</p>
        <div className="footer-socials">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="footer-social-btn"><FaLinkedin /></a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="footer-social-btn"><FaGithub /></a>
          <a href={`mailto:${profile.email}`} className="footer-social-btn"><FaEnvelope /></a>
        </div>
      </div>

      <nav className="footer-nav">
        <Link to="/">Home</Link>
        <Link to="/about-me">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
      </nav>

    </div>

    <div className="footer-bottom">
      <p>© {year} Roxanne Roxas. All rights reserved.</p>
      <p>Designed & Built by <span className="footer-credit">Kirby</span></p>
    </div>
  </footer>
)
}