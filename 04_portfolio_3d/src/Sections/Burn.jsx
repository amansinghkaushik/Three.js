import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function BurnReveal({ topImage, behindContent }) {
  const ref = useRef(null);

  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform scroll progress to burn radius (0% to 120%)
  const burnRadius = useTransform(smoothProgress, [0, 1], ["0%", "120%"]);
  
  // Red burn colors
  const innerVisible = "transparent";
  const orangeGlow = "rgba(255, 100, 0, 0.85)";
  const redEdge = "rgba(255, 0, 0, 0.75)";
  const darkEdge = "rgba(139, 0, 0, 0.5)";
  const solidBlack = "rgba(0, 0, 0, 1)";

  // Create the radial gradient mask
  const maskImage = useTransform(burnRadius, (radius) => 
    `radial-gradient(circle ${radius} at 50% 50%, ${innerVisible} 0%, ${innerVisible} 40%, ${orangeGlow} 45%, ${redEdge} 48%, ${darkEdge} 52%, ${solidBlack} 55%)`
  );

  // Background
  const backgroundImage = topImage 
    ? `url(${topImage})`
    : "linear-gradient(135deg, #2a0a0a 0%, #ff4500 30%, #1a0000 100%)";

  return (
    <section ref={ref} style={{ position: "relative", height: "200vh" }}>
      {/* Behind content - visible through the burn hole */}
      <div style={{ 
        position: "sticky", 
        top: 0,
        height: "100vh", 
        overflow: "hidden",
        zIndex: 1,
        background: "#010103"
      }}>
        {behindContent}
      </div>

      {/* Top burn layer */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage,
          WebkitMaskImage: maskImage,
          maskRepeat: "no-repeat",
          WebkitMaskRepeat: "no-repeat",
          maskSize: "cover",
          WebkitMaskSize: "cover",
          maskPosition: "center",
          WebkitMaskPosition: "center",
          zIndex: 100,
          pointerEvents: "none",
        }}
      />
    </section>
  );
}

