import {Canvas, useFrame} from "@react-three/fiber"
import { useRef } from "react" 
import { OrbitControls } from "@react-three/drei"

const RotatingCube = () => {

  const meshRef = useRef()

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })
 
  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1, 0.4, 20, 100]} />
      <meshLambertMaterial color = "#468585" emissive = "#468585" />
    </mesh>
  )
}

const  App = () => {
  return (
    <Canvas style ={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}>
      
      <OrbitControls enableZoom enablePan enableRotate />

      <directionalLight position = {[1, 1, 1]} intensity = {10} color = {0x9CDBA6} />

      <color attach= "background" args= {["F0F0F0"]} />

      <RotatingCube />

    </Canvas>
  )
}

export default App