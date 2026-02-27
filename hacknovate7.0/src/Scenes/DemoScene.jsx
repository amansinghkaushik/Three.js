import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { useControls } from "leva";
import Demos from "../components/Demos";
import { Group } from "three";

function DemoScene() {
  const d = useControls("directionalLight", {
    rotationX: {
      value: 1,
      min: -10,
      max: 10,
    },
    rotationY: {
      value: 1,
      min: -10,
      max: 10,
    },
    rotationZ: {
      value: 1,
      min: -10,
      max: 10,
    },
    scale: {
      value: 4,
      max: 1000,
    },
    color: {
      value: "#ff1515",
    },
    positionX: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 1,
      min: -10,
      max: 10,
    },
  });

  const s = useControls("spotLight", {
    color: {
      value: "#ff1515",
    },
    scale: {
      value: 4,
      max: 1000,
    },
    angle: {
      value: 0.15,
      min: 0,
      max: 1,
    },
    positionX: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 1,
      min: -10,
      max: 10,
    },
  });

  const p = useControls("pointLight", {
    color: {
      value: "#ff1515",
    },
    scale: {
      value: 4,
      max: 100,
    },
    positionX: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 1,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 1,
      min: -10,
      max: 10,
    },
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 20]} />
      <ambientLight intensity={0.5} />
      <spotLight
        position={[s.positionX, s.positionY, s.positionZ]} //{[-1.2, -10, -0.2]}
        color={s.color} // {#ff0000}
        angle={s.angle} // {0.04}
        penumbra={5}
        intensity={s.scale} // {500}
      />
      <directionalLight
        position={[d.positionX, d.positionY, d.positionZ]} // {[10.0, -1.8, 0.0]}
        color={d.color} // {#ff0000}
        intensity={d.scale} // {10}
      />
      <group>
        <pointLight
          position={[p.positionX, p.positionY, p.positionZ]} // {[1.0, 1.8, 6.2]}
          color={p.color} // {#ff0000}
          intensity={p.scale} //{50}
        />

        <Demos
          // position={[0, -1.5, 0]}
          // rotation={[0, Math.PI / 4, 0]}
          scale={10}
          position={[0.2, -5.6, 5]}
          rotation={[0, 0.6, 0]}
        />
      </group>

      <Environment preset="city" />

      <OrbitControls enableZoom={false} enablePan={false} />
    </>
  );
}

export default DemoScene;
