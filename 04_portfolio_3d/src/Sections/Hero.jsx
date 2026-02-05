import { PerspectiveCamera } from '@react-three/drei'
import HackerRoom from '../components/HackerRoom'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
import { calculateSizes } from '../constants/index.js';
import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive';
import ReactLogo from '../components/ReactLogo.jsx'
import Cube from '../components/Cube.jsx'
import Target from '../components/Target.jsx'
import Rings from '../components/Rings.jsx'
import HeroCamera from '../components/HeroCamera.jsx'
import Button from '../components/Button.jsx'

function Hero() {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

//   const controls = useControls('Ring',{
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
    <section className='relative h-screen w-full'>
      <div className="absolute inset-0">
        <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile} >
              <HackerRoom 
              scale={sizes.deskScale} 
              position={sizes.deskPosition} 
              rotation={[0.1, 3.1, 0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition}
            //   scale= {[controls.scale, controls.scale, controls.scale]} 
            // position= {[controls.positionX, controls.positionY, controls.positionZ]}
            // rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]} 
            />
              <ReactLogo position= {sizes.reactLogoPosition}/>
              <Cube position= {sizes.cubePosition} />
              <Rings position= {sizes.ringPosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
        </Canvas>  
      </div>

      <div className="absolute inset-0 flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 pointer-events-none">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans pointer-events-auto">
          Hi, I am Aman <span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient pointer-events-auto">Building Products & Brands</p>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space pointer-events-none">
        <a href="#about" className="w-fit pointer-events-auto">
          <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
        </a>
      </div>
    </section>
  )
}

export default Hero