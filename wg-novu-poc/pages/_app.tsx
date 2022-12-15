import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, createStandaloneToast } from "@chakra-ui/react";

export const { ToastContainer, toast } = createStandaloneToast();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
      <ToastContainer />
    </ChakraProvider>
  );
}
