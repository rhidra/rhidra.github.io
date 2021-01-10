import '../styles/global.css';
import { ChakraProvider, extendTheme } from '@chakra-ui/core';
import Head from 'next/head';

const theme = extendTheme({
  fonts: {
    body: "Montserrat, sans-serif",
    heading: "Spartan, serif",
  },

  colors: {
    grey: {
      50: 'HSL(22, 30%, 98%)',
      100: 'HSL(24, 26%, 96%)',
      200: 'HSL(30, 22%, 91%)',
      300: 'HSL(28, 16%, 84%)',
      400: 'HSL(33, 14%, 69%)',
      500: 'HSL(34, 10%, 52%)',
      600: 'HSL(36, 11%, 35%)',
      700: 'HSL(35, 15%, 23%)',
      800: 'HSL(39, 19%, 14%)',
      900: 'HSL(46, 21%, 12%)',
    },
    red: {
      50: 'HSL(350, 100%, 94%)',
      100: 'HSL(350, 96%, 90%)',
      200: 'HSL(350, 88%, 81%)',
      300: 'HSL(351, 80%, 72%)',
      400: 'HSL(352, 80%, 64%)',
      500: 'HSL(352, 72%, 54%)',
      600: 'HSL(352, 61%, 45%)',
      700: 'HSL(352, 61%, 36%)',
      800: 'HSL(352, 61%, 23%)',
      900: 'HSL(351, 80%, 12%)',
    },
    purple: {
      50: 'HSL(270, 75%, 97%)',
      100: 'HSL(263.5, 42.7%, 93.5%)',
      200: 'HSL(265, 64%, 87%)',
      300: 'HSL(264, 75%, 80%)',
      400: 'HSL(263, 56%, 57%)',
      500: 'HSL(263.5, 65.7%, 39.5%)',
      600: 'HSL(263.5, 65.7%, 27.5%)',
      700: 'HSL(269, 83%, 25%)',
      800: 'HSL(267, 88%, 16%)',
      900: 'HSL(264, 100%, 12%)',
    }
  }
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Rémy Hidra // Freelance Web Developer</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Spartan:wght@700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp
