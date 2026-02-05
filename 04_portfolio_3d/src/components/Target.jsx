import { useGLTF } from '@react-three/drei'

function Target(props) {
  const { nodes, materials } = useGLTF('models/js-logo.glb')
  return (
    <group scale={10} rotation={[2.5, 2.7, 3.5]} {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Mesh.geometry} material={materials.yellow} />
      <mesh castShadow receiveShadow geometry={nodes.Mesh_1.geometry} material={materials.black} />
    </group>
  )
}

useGLTF.preload('models/js-logo.glb')

export default Target

