import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { GoogleOAuthProvider } from '@react-oauth/google';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [isSSR, setisSSR] = useState(true)

  useEffect(() => {
    setisSSR(false)
  }, []);


  if (isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_GOOGLE_API_TOKEN}`}>
      <Navbar />
      <div className='flex gap-6 md:gap-20'>
        <div className='h-[92vh] overflow-hidden xl:overflow-auto'>
          <Sidebar />
        </div>
        <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
          <Component {...pageProps} />
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp

/**
 * SSR => Server side rendering
 */