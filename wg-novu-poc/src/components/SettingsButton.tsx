import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface Props {}

const SettingsButton: React.FC<Props> = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push("/setup");
  };

  return <Button onClick={handleClick}>Settings</Button>;
};

export default SettingsButton;
