import React from 'react'
import NavBar from '../components/Navigation/NavBar'
import { useWeb3Context } from '../web3Module/context/context'
import { ConnectWalletButton } from '../web3Module/Button/WalletButton'


const Profile = () => {

  const {  address, balance } = useWeb3Context()

  return (
    <>
    <NavBar />
       <section className="pt-[120px] md:pt-[150px] px-12 -z-[50] bg-white">
     <h2 className="font-gros text-[20px] md:text-[48px] text-exxDark font-bold">Welcome!</h2>
    </section>


    <div className="bg-exxDark py-[29px] px-[27px] rounded-[20px] mt-12 mx-12 w-2/2 md:w-2/3 inline-block">
    
     {address ?  
     (<p className="text-2xl text-white font-sans">You're connected to: <span className="text-exxBlue">{address }</span></p>)
     :     
    (<p className="text-2xl text-white font-sans">You're not connected  { <ConnectWalletButton CTA="Connect Wallet ↗" /> } </p>)
      }
         
     {balance ?  <p className="text-base text-white md:text-2xl mt-5 font-sans">Balance: {balance}</p> : "" }
    
     </div>
    </>
  )
}

export default Profile
