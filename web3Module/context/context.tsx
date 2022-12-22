import React, { ReactChild, createContext, useContext } from 'react'
import { Web3State, web3InitialState } from '../hooks/Web3Types'
import { useWalletConnector } from '../hooks/hook'


const Web3Context = createContext<Web3State>(web3InitialState)

interface Props {
  children: ReactChild
}

export const Web3ContextProvider = ({ children }: Props) => {
  const web3ProviderState = useWalletConnector()

  return (
    <Web3Context.Provider value={web3ProviderState}>
      {children}
    </Web3Context.Provider>
  ) 
}

export function useWeb3Context() {
  return useContext(Web3Context)
}