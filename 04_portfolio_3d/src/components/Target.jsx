import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'

function Target(props) {
  const jsRef = useRef()
  const { nodes, materials } = useGLTF('models/js-logo.glb')

  useGSAP(() => {
    if (jsRef.current) {
      gsap.to(jsRef.current.rotation, {
        y: jsRef.current.rotation.y + Math.PI * 2,
        duration: 8,
        repeat: -1,
        ease: 'none'
      })
    }
  })

  return (
    <group ref={jsRef} scale={10} rotation={[2.5, 2.7, 3.5]} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.yellow} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.black} />
    </group>
  )
}

useGLTF.preload('models/js-logo.glb')

export default Target

