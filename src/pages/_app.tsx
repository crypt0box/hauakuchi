import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";

const theme = extendTheme({
  fonts: {
    heading: "Nico Moji",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "orange.50",
        color: "#000000d1",
      },
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>めっちゃ早口でしゃべりたい</title>
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}
