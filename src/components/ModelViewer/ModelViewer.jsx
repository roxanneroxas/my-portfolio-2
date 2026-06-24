import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import './ModelViewer.css'

function Model({ path }) {
  const { scene } = useGLTF(path)
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />
}

function Loader() {
  return (
    <div className="model-loader">
      <span>Loading model...</span>
    </div>
  )
}

export default function ModelViewer({ modelPath, height = '400px', label }) {
  return (
    <div className="model-wrapper" style={{ height }}>
      <Suspense fallback={<Loader />}>
        <Canvas camera={{ position: [0, 1, 4], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <spotLight position={[5, 5, 5]} intensity={1.2} castShadow />
          <Suspense fallback={null}>
            <Model path={modelPath} />
            <Environment preset="city" />
            <ContactShadows position={[0, -1, 0]} opacity={0.35} scale={8} blur={2} />
          </Suspense>
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.5} />
        </Canvas>
      </Suspense>
      {label && <p className="model-label">{label}</p>}
    </div>
  )
}