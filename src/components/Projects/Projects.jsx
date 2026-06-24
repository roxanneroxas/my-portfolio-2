import React, { useState, Suspense, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import { projects } from '../../data/staticData'
import houseModel from '../../assets/house.glb'
import './Projects.css'

const ALL = 'All'
const categories = [ALL, ...new Set(projects.map(p => p.category))]

function HouseModel() {
  const { scene } = useGLTF(houseModel)
  const ref = useRef()

  useEffect(() => {
    if (!ref.current) return
    const box = new THREE.Box3().setFromObject(ref.current)
    const center = new THREE.Vector3()
    box.getCenter(center)
    ref.current.position.sub(center)
    ref.current.position.y = -box.getSize(new THREE.Vector3()).y / 2 + 0.5
  }, [scene])

  return <primitive ref={ref} object={scene} scale={0.8} />
}

export default function Projects() {
  const [active, setActive] = useState(ALL)
  const filtered = active === ALL ? projects : projects.filter(p => p.category === active)

  return (
    <main className="projects-page">
      <section className="proj-section">
        <div className="container">
        <div className="proj-header">
        <p className="section-label">What I've Built</p>
        <h1 className="section-title">My Projects</h1>
        <p className="proj-sub">A collection of {projects.length} projects across web, mobile, desktop, networking, and more.</p>
      </div>

          {/* 3D Model Section */}
          <div className="model-section">
            <p className="section-label" style={{ marginTop: '1rem' }}>3D Work</p>
            <h2 className="section-title" style={{ fontSize: '1.6rem', marginBottom: '0.5rem' }}>Blender Projects</h2>
            <p className="proj-sub">Interactive 3D models I built in Blender. Drag to orbit, scroll to zoom.</p>

            <div className="model-viewer-wrapper">
              <Suspense fallback={<div className="model-loader">Loading 3D model...</div>}>
                <Canvas camera={{ position: [0, 4, 14], fov: 38 }} style={{ height: '100%' }}>
                  <ambientLight intensity={0.6} />
                  <spotLight position={[5, 5, 5]} intensity={1.2} castShadow />
                  <Suspense fallback={null}>
                    <HouseModel />
                    <Environment preset="city" />
                    <ContactShadows position={[0, -1, 0]} opacity={0.35} scale={8} blur={2} />
                  </Suspense>
                  <OrbitControls
                    enableZoom
                    autoRotateSpeed={1.5}
                    target={[0, 0, 0]}
                    minDistance={70}
                    maxDistance={200}
                  />
                </Canvas>
              </Suspense>
              <p className="model-label">House — Blender 3D</p>
            </div>
          </div>

          {/* Project Cards */}
          <div className="proj-filters" style={{ marginTop: '4rem', textAlign: 'left' }}>
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