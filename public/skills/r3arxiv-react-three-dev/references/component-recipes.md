# Component Recipes

Use these as starting patterns. Adapt to local style and installed dependencies.

## Canvas Shell

```tsx
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export function SceneCanvas() {
  return (
    <div className="canvas-shell">
      <Canvas
        camera={{ position: [0, 2, 6], fov: 45, near: 0.1, far: 200 }}
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: "high-performance" }}
        shadows
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
```

## Animated Mesh

```tsx
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export function AnimatedBox() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
```

## GLTF Model

```tsx
import { useGLTF } from "@react-three/drei";

export function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} dispose={null} />;
}

useGLTF.preload("/models/example.glb");
```

Clone the scene if the same loaded model appears multiple times.

## Interactive Mesh

```tsx
import { useState } from "react";

export function Pickable() {
  const [hovered, setHovered] = useState(false);

  return (
    <mesh
      onPointerOver={(event) => {
        event.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <sphereGeometry />
      <meshStandardMaterial color={hovered ? "hotpink" : "white"} />
    </mesh>
  );
}
```

Only use React state for coarse interaction state. Do not update this every frame.

## Instanced Mesh

```tsx
import { useEffect, useMemo, useRef } from "react";
import { Object3D, type InstancedMesh } from "three";

export function Instances({ count = 500 }) {
  const ref = useRef<InstancedMesh>(null);
  const dummy = useMemo(() => new Object3D(), []);

  useEffect(() => {
    if (!ref.current) return;
    for (let i = 0; i < count; i += 1) {
      dummy.position.set(
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 20
      );
      dummy.updateMatrix();
      ref.current.setMatrixAt(i, dummy.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  }, [count, dummy]);

  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry />
      <meshStandardMaterial color="#9bd" />
    </instancedMesh>
  );
}
```

## Demand Render Loop

```tsx
<Canvas frameloop="demand">
  <StaticScene />
</Canvas>
```

```tsx
import { useThree } from "@react-three/fiber";

function ControlsBridge() {
  const invalidate = useThree((state) => state.invalidate);
  return <OrbitControls onChange={invalidate} />;
}
```

## Asset Pipeline Component Order

1. Validate model.
2. Optimize with glTF Transform or equivalent.
3. Generate component with `gltfjsx`.
4. Review generated material/geometry reuse.
5. Preload.
6. Add bounds/camera fit.
7. Add fallback/error UI.
