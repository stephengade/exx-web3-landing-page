import React from 'react'
import { useWalletConnector } from '../hooks/hook'
import ButtonUI from '../../components/Modules/ButtonUI'


interface ConnectProps {
  connect: (() => Promise<void>) | null
  CTA?: string
  
}
const ConnectButton = ({ connect, CTA }: ConnectProps) => {
  return connect ? (
    <ButtonUI onClick={connect} variant="contained" ClassName="bg-exxBlue  text-[14px] font-[500] text-white rounded-[10px] py-2 ">{CTA}</ButtonUI>
  ):

  ( <ButtonUI variant="contained" ClassName="bg-exxBlue  text-[14px] font-[500] text-white rounded-[10px] py-2 ">connecting...</ButtonUI>)
    
   
}

interface DisconnectProps {
  disconnect: (() => Promise<void>) | null
}

const DisconnectButton = ({ disconnect }: DisconnectProps) => {
return disconnect ? 
   ( <ButtonUI onClick={disconnect} variant="contained" ClassName="bg-exxDark  text-[14px] font-[500] text-white rounded-[10px] py-2 ">Disconnect</ButtonUI>)
   :
   (<ButtonUI variant="contained" ClassName="bg-exxDark  text-[14px] font-[500] text-white rounded-[10px] py-2 ">disconnecting...</ButtonUI>)
 
}

export function ConnectWalletButton({CTA}) {
  const { web3Provider, connect, disconnect } = useWalletConnector();

  if (web3Provider) {
    <DisconnectButton disconnect={disconnect}  />
  } 

  return <ConnectButton connect={connect} CTA={CTA} />
  
}


ConnectButton.defaultProps = {
 CTA: "Connect"
}