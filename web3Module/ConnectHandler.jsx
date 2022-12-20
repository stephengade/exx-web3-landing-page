import React, {useEffect, useState} from 'react';

import { ethers } from "ethers"



// const provider = new ethers.providers.Web3Provider(window.ethereum);




export const ConnectProvider = () => {
  const [WalletProvider, setProvider] = useState()
  const [ethApi, setEthApi] = useState()

  // account details

  const [AccountDetails, setAccount] = useState({
     address: ""
  })


  useEffect(() => {
    setProvider(new ethers.providers.Web3Provider(window.ethereum));
    setEthApi(window.ethereum);
  })


     const ConnectUser = () => {
  if (ethApi) {
    WalletProvider.send("eth_requestAccounts", [])
     .then(async ()=> {
        await accountChange(WalletProvider.getSigner())
     })
  } else {
    alert("Install Metamask 😎")
  }

}


  // handle Account details

  const accountChange = async (User) => {
    const Address = await User.getAddress();
}

  return {
    ConnectUser
  }


}

