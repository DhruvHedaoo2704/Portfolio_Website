import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Zone 1: Particle Grid (Full Stack / Android)
const ParticleGrid = ({ active }) => {
  const ref = useRef();
  const [positions] = useMemo(() => {
    const pos = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return [pos];
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.y = t * 0.05;
      if (ref.current.material instanceof THREE.PointsMaterial) {
        ref.current.material.opacity = THREE.MathUtils.lerp(ref.current.material.opacity, active ? 1 : 0.3, 0.05);
        ref.current.material.size = THREE.MathUtils.lerp(ref.current.material.size, active ? 0.12 : 0.05, 0.05);
      }
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#0ea5e9" size={0.05} sizeAttenuation depthWrite={false} />
    </Points>
  );
};

// Zone 2: Neural Mesh (AI / ML)
const NeuralMesh = ({ active }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.1;
      ref.current.rotation.y = t * 0.15;
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1.5 : 0.3, 0.05));
      if (ref.current.material) {
        ref.current.material.opacity = THREE.MathUtils.lerp(ref.current.material.opacity, active ? 0.7 : 0.2, 0.05);
        ref.current.material.emissiveIntensity = THREE.MathUtils.lerp(ref.current.material.emissiveIntensity, active ? 2 : 0.8, 0.05);
      }
    }
  });

  return (
    <mesh ref={ref} scale={[0.3, 0.3, 0.3]}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial wireframe color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} transparent opacity={0.2} />
    </mesh>
  );
};

// Zone 3: Data Stream Rings (Software Engineer)
const DataStream = ({ active }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.z = t * 0.2;
      ref.current.rotation.x = Math.sin(t * 0.5) * 0.5;
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1.2 : 0.3, 0.05));
      if (ref.current.material) {
        ref.current.material.opacity = THREE.MathUtils.lerp(ref.current.material.opacity, active ? 0.6 : 0.2, 0.05);
        ref.current.material.emissiveIntensity = THREE.MathUtils.lerp(ref.current.material.emissiveIntensity, active ? 1.8 : 0.7, 0.05);
      }
    }
  });

  return (
    <mesh ref={ref} scale={[0.3, 0.3, 0.3]}>
      <torusGeometry args={[2.5, 0.5, 16, 50]} />
      <meshStandardMaterial wireframe color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.7} transparent opacity={0.2} />
    </mesh>
  );
}

// Zone 4: Floating Cubes (Mobile Developer)
const FloatingCubes = ({ active }) => {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (ref.current) {
      ref.current.rotation.x = t * 0.15;
      ref.current.rotation.y = t * 0.2;
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1.3 : 0.3, 0.05));
      // Animate child meshes opacity
      ref.current.children.forEach((child, i) => {
        if (child.material) {
          child.material.opacity = THREE.MathUtils.lerp(child.material.opacity, active ? 0.7 : 0.25, 0.05);
          child.material.emissiveIntensity = THREE.MathUtils.lerp(child.material.emissiveIntensity, active ? 1.6 : 0.6, 0.05);
        }
      });
    }
  });

  return (
    <group ref={ref} scale={[0.3, 0.3, 0.3]}>
      {[-2, 0, 2].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(x), Math.cos(x)]} rotation={[x, x, x]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial wireframe color="#10b981" emissive="#10b981" emissiveIntensity={0.7} transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
};

export const BackgroundEngine = ({ currentZone }) => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 dark:from-slate-950 dark:via-black dark:to-slate-900"></div>
      
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={1.8} />
        <pointLight position={[15, 15, 15]} intensity={2.2} />
        <pointLight position={[-15, -15, 5]} intensity={1.5} color="#0ea5e9" />
        
        <ParticleGrid active={currentZone === 'Web'} />
        <FloatingCubes active={currentZone === 'Mobile'} />
        <NeuralMesh active={currentZone === 'AI'} />
        <DataStream active={currentZone === 'Software'} />
      </Canvas>
    </div>
  );
};

export default BackgroundEngine;
