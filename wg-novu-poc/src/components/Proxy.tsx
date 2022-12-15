import { Center, Spinner } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { loadConfig } from "../utils/storageService";

const Proxy: React.FC = () => {
  const { push } = useRouter();

  useEffect(() => {
    const storedConfig = loadConfig();

    if (storedConfig) push("/app");
    else push("/setup");
  }, [push]);

  return (
    <Center h="100vh">
      <Spinner size="xl" color="orange" />
    </Center>
  );
};

export default Proxy;
