import { Center } from "@chakra-ui/react";
import Head from "next/head";
import ErrorBoundary from "../src/components/ErrorBoundary";
import SetupForm from "../src/components/SetupForm";

export default function Setup() {
  return (
    <ErrorBoundary>
      <Head>
        <title>Novu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center as="main">
        <SetupForm />
      </Center>
    </ErrorBoundary>
  );
}
