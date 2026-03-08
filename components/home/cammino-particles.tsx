"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 50;

// Generate positions at module level to satisfy React purity rules
const SEED_POSITIONS = (() => {
  const pos = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 22;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
  }
  return pos;
})();

function FloatingSeeds() {
  const ref = useRef<THREE.Points | null>(null);

  const [geometry, origins] = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    const pos = new Float32Array(SEED_POSITIONS);
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return [geo, new Float32Array(pos)] as const;
  }, []);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.elapsedTime * 0.12;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      arr[idx] = origins[idx] + Math.sin(t + i * 0.6) * 0.5;
      arr[idx + 1] = origins[idx + 1] + Math.cos(t * 0.7 + i * 0.4) * 0.35;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={0.06}
        color="#f8ce79"
        transparent
        opacity={0.25}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export function CamminoParticles() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 motion-reduce:hidden"
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <FloatingSeeds />
      </Canvas>
    </div>
  );
}
