import React from "react"
import Hero from "../components/Hero/Hero"
import NavBar from "../components/Navigation/NavBar"
import Resources from "../components/Resources/Resources"
import Features from "../components/Features/Features"
import Connected from "../components/Connected/Connected"
import Guides from "../components/Guides/Guides"
import Community from "../components/Community/Community"
import Update from "../components/Update/Update"
import Newsletter from "../components/Newsletter/Newsletter"
import Footer from "../components/Footer/Footer"




const IndexPage = () => {
 
  return (
    <>
  <NavBar />
   
   <Hero />
   <Resources />
   <Features />
   <Connected />
   <Guides />
   <Community />
   <Update />
   <Newsletter />
   <Footer />
   </>
  )
 
  }

export default IndexPage
