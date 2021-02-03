import '../styles/global.css';
import { ChakraProvider } from '@chakra-ui/core';
import Head from 'next/head';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Rémy Hidra // Mobile App Developer</title>

        {/* Fonts (Montserrat / Spartan) */}
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Spartan:wght@700&display=swap" rel="stylesheet"/>

        {/* Favicon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>

        {/* Google tracking token */}
        <meta name="google-site-verification" content="zhO_vjy3H84BJz-sXTCFRv7e2gf0y1GX5ojB0KA0PYw" />

        {/* Social sharing */}
        <meta property="og:title" content="Rémy Hidra // Freelance Web Developer"/>
        <meta property="og:description" content="I am Rémy, a full-stack Web developer. Let's build an app together !"/>
        <meta property="og:image" content="https://rhidra.github.io/favicon.png"/>
        <meta property="og:url" content="https://rhidra.github.io"/>
        <meta property="og:type" content="website"/> 
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:site" content="rehidra"/>
        <meta name="author" content="Rémy Hidra"/> 
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
