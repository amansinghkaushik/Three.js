import React from "react"
import Navbar from "./Sections/Navbar"
import Hero from "./Sections/Hero"
import About from "./Sections/About"
import Projects from "./Sections/Projects"
import Clients from "./Sections/Clients"
import Contacts from "./Sections/Contact"
import Footer from "./Sections/Footer"
import Experience from './Sections/Experience'
import Burn from "./Sections/Burn"


function App() {


  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Burn 
          behindContent={<Projects />}
          topImage="/assets/spotlight1.png"
        />
        <Experience />
        <Clients />
        <Contacts />
        <Footer />
      </main>
    </>
  )
}

export default App
