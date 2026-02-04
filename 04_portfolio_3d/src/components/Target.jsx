import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Target(props) {
  const { nodes, materials } = useGLTF('models/js-logo.glb')
  return (
    <group position={[9, -4, 0]} scale={0.74} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.yellow} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.black} />
    </group>
  )
}

useGLTF.preload('models/js-logo.glb')

export default Target

