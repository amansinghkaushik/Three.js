import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
import { calculateSizes } from '../constants/index.js';
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive';

function Hero() {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   const controls = useControls('HackerRoom',{
//     rotationX: {
//       value: 2.5,
//       min: -10,
//       max: 10
//     },
//     rotationY: {
//       value: 2.5,
//       min: -10,
//       max: 10
//     },
//     rotationZ: {
//       value: 2.5,
//       min: -10,
//       max: 10
//     },
//     scale : {
//       value : 0.1,
//       max : 10
//     },
//     positionX :{
//       value : 1,
//       min : -10,
//       max : 10
//     },
//     positionY :{
//       value : 1,
//       min : -10,
//       max : 10
//     },
//     positionZ :{
//       value : 1,
//       min : -10,
//       max : 10
//     },
//     }
// )

  return (
    <section className='max-h-screen'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Aman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">Building Products & Brands</p>
      </div>

      <div className="w-full h-full absolute inset-0">
        {/* <Leva /> */}
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HackerRoom 
            scale={sizes.deskScale} 
            position={sizes.deskPosition} 
            rotation={[0.1, 3.1, 0]}
            // scale= {[controls.scale, controls.scale, controls.scale]} 
            // position= {[controls.positionX, controls.positionY, controls.positionZ]}
            // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]} 
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>  
      </div>
    </section>
  )
}

export default Hero