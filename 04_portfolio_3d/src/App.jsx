import React from "react"
import Navbar from "./Sections/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Clients from "./Sections/Clients"
import Contacts from "./Sections/Contact"


function App() {


  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
        <Contacts />
      </main>
    </>
  )
}

export default App
