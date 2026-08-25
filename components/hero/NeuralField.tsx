"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 260;
const RADIUS = 4.4;
const LINK_DIST = 1.05;

function buildField() {
  const positions = new Float32Array(COUNT * 3);
  for (let i = 0; i < COUNT; i++) {
    // sample inside a flattened ellipsoid so the field reads as a wide plane, not a ball
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = RADIUS * Math.cbrt(Math.random());
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55;
    positions[i * 3 + 2] = r * Math.cos(phi) * 0.65;
  }

  const linkPositions: number[] = [];
  for (let i = 0; i < COUNT; i++) {
    let linked = 0;
    for (let j = i + 1; j < COUNT && linked < 2; j++) {
      const dx = positions[i * 3] - positions[j * 3];
      const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
      const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
      const d = Math.sqrt(dx * dx + dy * dy + dz * dz);
      if (d < LINK_DIST) {
        linkPositions.push(
          positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
          positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
        );
        linked++;
      }
    }
  }

  return { positions, links: new Float32Array(linkPositions) };
}

function Field() {
  const group = useRef<THREE.Group>(null);
  const { positions, links } = useMemo(() => buildField(), []);
  const pointer = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  useFrame((state) => {
    pointer.current.x = state.pointer.x;
    pointer.current.y = state.pointer.y;
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y += 0.0009;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.current.y * 0.18,
      0.04
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      group.current.rotation.y + pointer.current.x * 0.0003,
      1
    );
    group.current.position.y = Math.sin(t * 0.25) * 0.08;
  });

  const scale = size.width < 640 ? 0.72 : 1;

  return (
    <group ref={group} scale={scale}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#f3f1ec" size={0.028} sizeAttenuation transparent opacity={0.75} />
      </points>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[links, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#ff5a36" transparent opacity={0.14} />
      </lineSegments>
    </group>
  );
}

export function NeuralField() {
  return (
    <Canvas
      camera={{ position: [0, 0, 7.2], fov: 50 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Field />
    </Canvas>
  );
}
