import React from 'react'
import { AppProps } from 'next/app'

import "../styles/index.css";
import InjectTailwind from '../components/Modules/InjectTailwind';
import { Web3ContextProvider } from '../web3Module/context/context';


function MyApp({ Component, pageProps }: AppProps) {
  const AppComponent = Component as any;
  return (
    <Web3ContextProvider>
    <InjectTailwind>
    <AppComponent {...pageProps} />
    </InjectTailwind>
    </Web3ContextProvider>
  )
}

export default MyApp;
