import React from 'react'
import { AppProps } from 'next/app'

import "../styles/index.css";
import InjectTailwind from '../components/Modules/InjectTailwind';




function MyApp({ Component, pageProps }: AppProps) {

  return (
    <InjectTailwind>
    <Component {...pageProps} />
    </InjectTailwind>
  )
}

export default MyApp;