import { Main } from 'next/document';
import React from 'react';
import NavigationMenu from '../components/NavigationMenu';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavigationMenu/>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;