import { useEffect, useRef } from "react";

function Hero() {

    const videoRef = useRef();

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2;
        }
    },[])

  return (
    <section id="hero">
        <div>
            <h1>Macbook Pro</h1>
            <img src="/title.png" alt="MAcbook title" />
        </div>

        <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>

        <button>buy</button>
        <p>from $1299 or $133/mo for 12 months</p>
    </section>
  )
}

export default Hero