/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";


class MainDocument extends Document {
   static async getInitialProps(ctx) {
  const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
  return (
    <Html lang="en">
      <Head>
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans&DM+Mono&family=Space+Grotesk&display=swap" rel="stylesheet" />
         

     
{/* 
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#1c85eb" />
        <meta name="theme-color" content="#1c85eb" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
          <div id="modal-root"></div>
      </body>
    </Html>
  );
  }
}

export default MainDocument;