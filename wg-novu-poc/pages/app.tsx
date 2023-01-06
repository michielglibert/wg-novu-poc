import { Box, Button, Center, HStack, Spinner } from "@chakra-ui/react";
import { NovuProvider } from "@novu/notification-center";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ErrorBoundary from "../src/components/ErrorBoundary";
import NotificationsBell from "../src/components/NotificationsBell";
import SettingsButton from "../src/components/SettingsButton";
import UseNotificationListener from "../src/components/UseNotificationListener";
import useNewNotification from "../src/hooks/useNewNotification";
import { NovuConfiguration } from "../src/types/Novu";
import { loadConfig } from "../src/utils/storageService";

export default function Setup() {
  const { push } = useRouter();

  const [novuConfig, setNovuConfig] = useState<NovuConfiguration>();

  useEffect(() => {
    const config = loadConfig();

    if (config) setNovuConfig(config);
    else push("/setup");
  }, [push]);

  if (!novuConfig) return null;

  return (
    <ErrorBoundary>
      <Head>
        <title>Novu</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center as="main" height="100vh">
        <NovuProvider
          subscriberId={novuConfig!.subscriberId}
          applicationIdentifier={novuConfig!.applicationIdentifier}
        >
          <UseNotificationListener />
          You can now trigger notifications! Using the default UI
          <HStack spacing="4" pos="absolute" top="2" right="2">
            <NotificationsBell />
            <SettingsButton />
          </HStack>
        </NovuProvider>
      </Center>
    </ErrorBoundary>
  );
}
