import React from 'react'
import ButtonUI from '../../components/Modules/ButtonUI'
import { useWeb3Context } from '../context/context'


interface ConnectProps {
  connect: (() => Promise<void>) | null
  CTA?: string | any
  
}
const ConnectButton = ({ connect, CTA }: ConnectProps) => {
  return connect ? (
    <ButtonUI onClick={connect} variant="contained" ClassName="bg-exxBlue text-[14px] font-[500] text-white rounded-[10px] py-2">{CTA}</ButtonUI> )
    :
  (<ButtonUI variant="outlined" ClassName="bg-white text-[14px] font-[500] hover:text-white text-exxBlue rounded-[10px] py-2">Connecting...</ButtonUI>)  
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

export function ConnectWalletButton({CTA} : any) {
  const { web3Provider, connect, disconnect } = useWeb3Context();

  return web3Provider ? (
  <DisconnectButton disconnect={disconnect}  /> 
  ) : 
  (
  <ConnectButton connect={connect} CTA={CTA} />
  )
  
}


ConnectButton.defaultProps = {
 CTA: "Connect"
}