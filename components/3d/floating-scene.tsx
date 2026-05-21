"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function FloatingShape({
  position,
  color,
  geometry,
}: {
  position: [number, number, number];
  color: string;
  geometry: "box" | "sphere" | "torus";
}) {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.28;
  });

  return (
    <Float speed={2.8} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh ref={ref} position={position}>
        {geometry === "box" ? <boxGeometry args={[1.1, 1.1, 1.1]} /> : null}
        {geometry === "sphere" ? <sphereGeometry args={[0.82, 32, 32]} /> : null}
        {geometry === "torus" ? <torusGeometry args={[0.7, 0.22, 18, 60]} /> : null}
        <MeshDistortMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.4}
          roughness={0.08}
          metalness={0.82}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

export default function FloatingScene() {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }} className="h-full w-full">
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={2} color="#7dd3fc" />
      <pointLight position={[-4, -1, 2]} intensity={2.4} color="#8b5cf6" />
      <FloatingShape position={[-1.85, 1.1, -0.8]} color="#38bdf8" geometry="box" />
      <FloatingShape position={[1.75, 0.3, -0.4]} color="#6366f1" geometry="sphere" />
      <FloatingShape position={[0.1, -1.5, -0.2]} color="#a855f7" geometry="torus" />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.65} />
    </Canvas>
  );
}
