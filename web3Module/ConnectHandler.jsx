import {useEffect, useState} from 'react';

import { ethers } from "ethers"





export const ConnectProvider = () => {

  

  const [WalletProvider, setProvider] = useState()
  const [isWindow, setWindow] = useState()


  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum, "any"))
    setWindow(window.ethereum)
  }, [])

  // // account details

  const [walletAddress, setAddress] = useState("")
  const [walletBalance, setBalance] = useState("")
  const [isConnected, setConnected] = useState(false)


  // console.log(provider)


const ConnectUser =  () => {
  if(isWindow) {
    WalletProvider.send("eth_requestAccounts", []).then(async ()=> {
    await ConnectedAccount(WalletProvider.getSigner());
   })
} else {
  console.log("Install Metamask 😎")
}

return ConnectUser;
  }



   // handle Account details

   const ConnectedAccount = async (User) => {
    const Address = await User.getAddress();
    await setAddress(Address);
    await User.signMessage("Welcome to Exx Network (This is a test)");
    await GetBalance(Address)
   }

   


// get balance
const GetBalance = async (address) => {
  const balance = await WalletProvider.getBalance(address, "latest")
  setBalance(ethers.utils.formatEther(balance))

}

  return {ConnectUser, walletAddress, walletBalance}


}

