import React, { useRef, memo } from 'react'
import { useGLTF } from '@react-three/drei'

function Demos(props) {
  const { nodes, materials } = useGLTF('/models/demogorgon.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_6.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_7.geometry}
        material={materials.material_0}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.material_0}
      />
    </group>
  )
}

// Memoize to prevent unnecessary re-renders when props haven't changed
const MemoizedDemos = memo(Demos, (prevProps, nextProps) => {
  // Compare position arrays
  const prevPos = prevProps.position || []
  const nextPos = nextProps.position || []
  const positionEqual = prevPos[0] === nextPos[0] && prevPos[1] === nextPos[1] && prevPos[2] === nextPos[2]
  
  // Compare rotation arrays
  const prevRot = prevProps.rotation || []
  const nextRot = nextProps.rotation || []
  const rotationEqual = prevRot[0] === nextRot[0] && prevRot[1] === nextRot[1] && prevRot[2] === nextRot[2]
  
  // Compare scale arrays
  const prevScale = prevProps.scale || []
  const nextScale = nextProps.scale || []
  const scaleEqual = prevScale[0] === nextScale[0] && prevScale[1] === nextScale[1] && prevScale[2] === nextScale[2]
  
  return positionEqual && rotationEqual && scaleEqual
})

export default MemoizedDemos

useGLTF.preload('/models/demogorgon.glb')
