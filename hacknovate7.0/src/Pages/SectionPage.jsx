import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
// import Demos from '../components/Demo'
// import CanvasLoader from '../components/CanvasLoader'
import DemoScene from "../Scenes/DemoScene";

function SectionPage() {
  return (
    <section className="w-full h-screen bg-[#000000] flex items-center justify-center overflow-hidden">
      <div
        className={`w-full text-black h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 transition-opacity duration-500`}
      >
        {/* <h1>hello</h1> */}
        {/* Left Side - 3D Model */}
        <div className="w-full md:w-full h-[50vh] md:h-full flex items-center justify-center">
          <div className="w-full h-full">
            <leva />
            <Canvas className="w-full h-full">
              <Suspense>
                <DemoScene />
              </Suspense>
            </Canvas>
          </div>
        </div>

        {/* Right Side - Heading */}
        <div className="w-full md:w-1/2 h-[50vh] md:h-full flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
            Experience the
            <br />
            <span className="text-black">Future</span>
            <br />
            of Innovation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/90 max-w-md">
            Explore our cutting-edge 3D visualizations and bring your ideas to
            life with immersive technology.
          </p>
          <button className="mt-8 px-8 py-3 bg-black text-white text-lg font-semibold rounded-full hover:bg-white hover:text-black transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionPage;
