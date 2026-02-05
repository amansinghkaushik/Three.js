import React from "react"
import Navbar from "./Sections/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"


function App() {


  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
