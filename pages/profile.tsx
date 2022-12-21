import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import { ConnectProvider } from '../web3Module/ConnectHandler'

const Profile = () => {
  const {walletAddress, walletBalance} = ConnectProvider()
  
  return (
    <>
    <NavBar />
       <section className="pt-[120px] md:pt-[150px] px-12 -z-[50] bg-white">
     <h2 className="font-gros text-sm md:text-2xl text-exxDark">Welcome!</h2>
     <p className="text-base font-sans">You're connected to: {walletAddress}</p>
     <p className="text-base font-sans">Your Balance: {walletBalance}</p>
     

    </section>
    </>
  )
}

export default Profile
