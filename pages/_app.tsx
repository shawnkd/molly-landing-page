import '../styles/globals.css'
import type { AppProps } from 'next/app'
import './header.css';
import './room.scss';
import { MoralisProvider } from "react-moralis";



function MyApp({ Component, pageProps }: AppProps) {
  return (
    //@ts-ignore
    <MoralisProvider appId={process.env.NEXT_PUBLIC_MORALIS_APP_ID}
    serverUrl={process.env.NEXT_PUBLIC_MORALIS_SERVER_ID}
  >

  <Component {...pageProps} />
  </MoralisProvider>
  );
}

export default MyApp
