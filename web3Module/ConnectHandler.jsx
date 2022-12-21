import React, {useEffect, useState} from 'react';
import router from 'next/router'

import { ethers } from "ethers"



// const provider = new ethers.providers.Web3Provider(window.ethereum);




export const ConnectProvider = () => {
  const [WalletProvider, setProvider] = useState()
  const [ethApi, setEthApi] = useState()

  // account details

  const [walletAddress, setAddress] = useState("")
  const [walletBalance, setBalance] = useState("")


  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
    setEthApi(window.ethereum);
  }, [])


const ConnectUser =  () => {

  if(ethApi) {
    WalletProvider.send("eth_requestAccounts", []).then(async ()=> {
    await ConnectedAccount(WalletProvider.getSigner());
     await  router.push("/profile")
   })
} else {
  alert("Install Metamask 😎")
}
  }



   // handle Account details

   const ConnectedAccount = async (User) => {
    const Address = await User.getAddress();
    setAddress(Address);
    await GetBalance(Address)
     return Address;
   }

   


// get balance
const GetBalance = async (address) => {
  const balance = await WalletProvider.getBalance(address, "latest")
  setBalance(ethers.utils.formatEther(balance))

}

  return {
    ConnectUser,
    ConnectedAccount,
    GetBalance,
  }


}

