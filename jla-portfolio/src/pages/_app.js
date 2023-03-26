import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import '../../public/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationMenu/>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;