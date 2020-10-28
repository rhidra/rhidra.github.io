import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Spartan, serif",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Rémy Hidra - Freelance Web Developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Spartan:wght@700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
