import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Scene3D() {
  const containerRef = useRef(null)
  const rendererRef = useRef(null)
  const animationRef = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0xffffff, 10, 25)

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100)
    camera.position.set(0, 0, 6)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    container.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.7)
    scene.add(ambient)

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.9)
    dirLight.position.set(5, 8, 5)
    dirLight.castShadow = true
    scene.add(dirLight)

    // Materials (brand indigo palette)
    const matPrimary = new THREE.MeshPhysicalMaterial({ color: 0x4f46e5, metalness: 0.3, roughness: 0.3, clearcoat: 0.6 })
    const matAccent = new THREE.MeshPhysicalMaterial({ color: 0xa5b4fc, metalness: 0.2, roughness: 0.4, clearcoat: 0.4 })
    const matDeep = new THREE.MeshPhysicalMaterial({ color: 0x3730a3, metalness: 0.35, roughness: 0.25, clearcoat: 0.5 })

    // Geometry
    const torus = new THREE.Mesh(new THREE.TorusKnotGeometry(0.7, 0.22, 200, 32), matAccent)
    torus.position.set(1.6, -0.2, 0.2)
    torus.castShadow = true

    const ico = new THREE.Mesh(new THREE.IcosahedronGeometry(1.0, 0), matPrimary)
    ico.position.set(-1.8, 0.9, 0.0)
    ico.castShadow = true

    const dode = new THREE.Mesh(new THREE.DodecahedronGeometry(0.8, 0), matDeep)
    dode.position.set(0.2, -1.4, -0.4)
    dode.castShadow = true

    scene.add(torus, ico, dode)

    // Subtle floating particles
    const particles = new THREE.Points(
      new THREE.BufferGeometry().setAttribute(
        'position',
        new THREE.Float32BufferAttribute(new Float32Array(3 * 150).map(() => (Math.random() - 0.5) * 12), 3)
      ),
      new THREE.PointsMaterial({ color: 0x818cf8, size: 0.02, transparent: true, opacity: 0.5 })
    )
    scene.add(particles)

    const clock = new THREE.Clock()

    const animate = () => {
      const t = clock.getElapsedTime()
      torus.rotation.x = t * 0.5
      torus.rotation.y = t * 0.8

      ico.rotation.x = t * 0.4
      ico.rotation.y = t * 0.6

      dode.rotation.x = t * 0.3
      dode.rotation.y = t * 0.45

      particles.rotation.y = t * 0.05

      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => {
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    }
    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(container)

    return () => {
      cancelAnimationFrame(animationRef.current)
      resizeObserver.disconnect()
      renderer.dispose()
      container.removeChild(renderer.domElement)
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.geometry.dispose()
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose())
          else obj.material.dispose()
        }
      })
    }
  }, [])

  return (
    <div ref={containerRef} className="h-full w-full pointer-events-none" />
  )
}
