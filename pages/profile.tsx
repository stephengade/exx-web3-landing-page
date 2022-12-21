import React from 'react'
import { ConnectProvider } from '../web3Module/ConnectHandler'
import NavBar from '../components/Navigation/NavBar'

const Profile = () => {
  
  const address = "0x...connect account"


  return (
    <>
    <NavBar />
       <section className="pt-[120px] md:pt-[150px] px-12 -z-[50] bg-white">
     <h2 className="font-gros text-sm md:text-2xl text-exxDark">Welcome!</h2>
     <p className="text-base font-sans">Your wallet address is {address}</p>
    </section>
    </>
  )
}

export default Profile
