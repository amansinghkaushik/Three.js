import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Demo(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/model/dead_by_daylight_-_the_demogorgon')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.011}>
          <group
            name="450c97673faa4da7800b119cf9b1c6adfbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Demo" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_130"
                      geometry={nodes.Object_130.geometry}
                      material={materials.BodyMat}
                      skeleton={nodes.Object_130.skeleton}
                    />
                    <skinnedMesh
                      name="Object_131"
                      geometry={nodes.Object_131.geometry}
                      material={materials.ArmsMat}
                      skeleton={nodes.Object_131.skeleton}
                    />
                    <skinnedMesh
                      name="Object_132"
                      geometry={nodes.Object_132.geometry}
                      material={materials.TeethMat}
                      skeleton={nodes.Object_132.skeleton}
                    />
                    <skinnedMesh
                      name="Object_133"
                      geometry={nodes.Object_133.geometry}
                      material={materials.HeadMat}
                      skeleton={nodes.Object_133.skeleton}
                    />
                    <group name="Object_129" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
                  </group>
                </group>
                <group name="DemoMesh" rotation={[-Math.PI / 2, 0, 0]} scale={100} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/model/dead_by_daylight_-_the_demogorgon')