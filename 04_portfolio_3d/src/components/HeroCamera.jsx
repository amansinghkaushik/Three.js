import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { easing } from 'maath'

function HeroCamera({ children, isMobile }) {
    
    const groupref = useRef()

    useFrame((state, delta) => {
        easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta)

        if (!isMobile) {
            easing.dampE(groupref.current.rotation, [-state.pointer.y / 5, state.pointer.x / 5, 0], 0.25, delta)
        }
    })

  return (
    <group scale={isMobile? 1 : 1.3 } ref={groupref}>
        {children}
    </group>
  )
}

export default HeroCamera