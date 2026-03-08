"use client";

import { Float, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function SeedComposition() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.rotation.y = state.clock.elapsedTime * 0.12;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.14;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.22} floatIntensity={0.45}>
        <mesh scale={[1.55, 1.15, 1.2]}>
          <icosahedronGeometry args={[1.1, 6]} />
          <meshStandardMaterial color="#8e9f93" metalness={0.05} roughness={0.42} />
        </mesh>
        <mesh scale={[1.72, 1.28, 1.34]}>
          <icosahedronGeometry args={[1.05, 3]} />
          <meshStandardMaterial
            color="#ffb067"
            metalness={0}
            opacity={0.18}
            roughness={0.92}
            transparent
            wireframe
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2.7, 0.4, 0.7]} scale={[1.05, 0.7, 1]}>
        <torusGeometry args={[1.95, 0.08, 20, 180]} />
        <meshStandardMaterial color="#f8ce79" metalness={0.08} roughness={0.32} />
      </mesh>

      <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[1.55, 1.05, 0.2]} scale={0.38}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#ffb067" roughness={0.25} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.25} floatIntensity={0.55}>
        <mesh position={[-1.35, -1.15, 0.4]} scale={0.32}>
          <sphereGeometry args={[1, 48, 48]} />
          <meshStandardMaterial color="#83883e" roughness={0.4} />
        </mesh>
      </Float>

      <Float speed={1.4} rotationIntensity={0.2} floatIntensity={0.45}>
        <mesh position={[-1.75, 0.65, -0.3]} scale={0.2}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#a56900" roughness={0.36} />
        </mesh>
      </Float>

      <Sparkles color="#ffb067" count={48} scale={[5.8, 4.2, 4]} size={2.8} speed={0.25} />
    </group>
  );
}

export function HeroCanvas() {
  return (
    <Canvas camera={{ fov: 42, position: [0, 0, 5.5] }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.8} />
      <hemisphereLight args={["#fff7eb", "#c6b8a1", 1.15]} />
      <directionalLight color="#fff3db" intensity={2.2} position={[3.5, 4, 2.5]} />
      <pointLight color="#ffb067" intensity={14} position={[-2, 1.5, 3]} />
      <SeedComposition />
    </Canvas>
  );
}