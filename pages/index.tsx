import React from "react"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/Navigation/NavBar"
import Resources from "../components/Resources/Resources"
import Features from "../components/Features/Features"
import Connected from "../components/Connected/Connected"


const IndexPage = () => {
 
  return (
    <>
  <NavBar />
   <Hero />
   <Resources />
   <Features />
   <Connected />
   </>
  )
 
  }

export default IndexPage
