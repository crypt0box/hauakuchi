import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";

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
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        staleTime: Infinity,
        cacheTime: 0,
      },
    },
  });
  return (
    <>
      <Head>
        <title>めっちゃ早口でしゃべりたい</title>
      </Head>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ChakraProvider>
    </>
  );
}
