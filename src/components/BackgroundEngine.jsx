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
        ref.current.material.opacity = THREE.MathUtils.lerp(ref.current.material.opacity, active ? 0.6 : 0, 0.1);
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
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1.2 : 0, 0.05));
    }
  });

  return (
    <mesh ref={ref} scale={[0, 0, 0]}>
      <sphereGeometry args={[2, 16, 16]} />
      <meshStandardMaterial wireframe color="#a855f7" emissive="#a855f7" emissiveIntensity={0.8} transparent opacity={active ? 0.3 : 0} />
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
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1 : 0, 0.1));
    }
  });

  return (
    <mesh ref={ref} scale={[0, 0, 0]}>
      <torusGeometry args={[2.5, 0.5, 16, 50]} />
      <meshStandardMaterial wireframe color="#f59e0b" emissive="#f59e0b" emissiveIntensity={0.6} transparent opacity={active ? 0.3 : 0} />
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
      ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, active ? 1 : 0, 0.1));
    }
  });

  return (
    <group ref={ref} scale={[0, 0, 0]}>
      {[-2, 0, 2].map((x, i) => (
        <mesh key={i} position={[x, Math.sin(x), Math.cos(x)]} rotation={[x, x, x]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshStandardMaterial wireframe color="#10b981" emissive="#10b981" emissiveIntensity={0.6} transparent opacity={active ? 0.4 : 0} />
        </mesh>
      ))}
    </group>
  );
};

export const BackgroundEngine = ({ currentZone }) => {
  return (
    <div className="absolute inset-0 -z-10 bg-slate-50 dark:bg-[#0f172a] transition-colors duration-1000 overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        <ParticleGrid active={currentZone === 'Web'} />
        <FloatingCubes active={currentZone === 'Mobile'} />
        <NeuralMesh active={currentZone === 'AI'} />
        <DataStream active={currentZone === 'Software'} />
        
        {/* Removed subtle blur overlay that caused a dark square in light mode */}
      </Canvas>
    </div>
  );
};

export default BackgroundEngine;
