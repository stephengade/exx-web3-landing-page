import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import { useWalletConnector } from '../web3Module/hooks/hook'


const Profile = () => {

  const {  address, network } = useWalletConnector()
  
  return (
    <>
    <NavBar />
       <section className="pt-[120px] md:pt-[150px] px-12 -z-[50] bg-white">
     <h2 className="font-gros text-sm md:text-2xl text-exxDark">Welcome!</h2>
     <p className="text-base font-sans">You're connected to: {address}</p>
     <p className="text-base font-sans">Network: {network}</p>
     

    </section>
    </>
  )
}

export default Profile
