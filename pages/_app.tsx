import React from 'react'
import { AppProps } from 'next/app'

import "../styles/index.css";
import InjectTailwind from '../components/Modules/InjectTailwind';


// web 3 configuration

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";


import { Web3Modal } from "@web3modal/react";

import { configureChains, createClient, WagmiConfig } from "wagmi";

import { arbitrum, mainnet, polygon } from "wagmi/chains";


const chains = [arbitrum, mainnet, polygon];

// Wagmi client
const { provider } = configureChains(chains, [
walletConnectProvider({ projectId: "<YOUR_PROJECT_ID>" }),
]);
const wagmiClient = createClient({
autoConnect: true,
connectors: modalConnectors({ appName: "web3Modal", chains }),
provider,
});

// Web3Modal Ethereum Client
export const ethereumClient = new EthereumClient(wagmiClient, chains);




function MyApp({ Component, pageProps }: AppProps) {
  const AppComponent = Component as any;
  return (
    <>
    <WagmiConfig client={wagmiClient}>
    <InjectTailwind>
    <AppComponent {...pageProps} />
    </InjectTailwind>
    </WagmiConfig>


<Web3Modal
projectId="<YOUR_PROJECT_ID>"
ethereumClient={ethereumClient}
/>
</>
  )
}

export default MyApp;