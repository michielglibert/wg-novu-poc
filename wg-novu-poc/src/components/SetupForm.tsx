import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import React from "react";
import { NovuConfiguration } from "../types/Novu";
import { loadConfig, storeConfig } from "../utils/storageService";
import { useRouter } from "next/router";

const SetupForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NovuConfiguration>({
    defaultValues: loadConfig(),
  });

  const toast = useToast();
  const { push } = useRouter();

  const handleConfirm = handleSubmit((values) => {
    storeConfig(values);
    toast({
      description: "Config saved",
      status: "success",
    });
    push("/app");
  });

  return (
    <VStack p="12" borderRadius="md">
      <Heading>Credentials</Heading>

      <FormControl isInvalid={!!errors.subscriberId}>
        <FormLabel>subscriberId *</FormLabel>
        <Input {...register("subscriberId", { required: true })} />
        <FormErrorMessage>{errors.subscriberId?.message}</FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.applicationIdentifier}>
        <FormLabel>applicationIdentifier *</FormLabel>
        <Input {...register("applicationIdentifier", { required: true })} />
        <FormErrorMessage>
          {errors.applicationIdentifier?.message}
        </FormErrorMessage>
      </FormControl>

      <Button onClick={handleConfirm}>Confirm</Button>
    </VStack>
  );
};

export default SetupForm;
