import {
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { useFormContext } from "react-hook-form";
import { RegisterFormValues } from "../forms/register";

interface RegisterFormProps {
  onRegisterSubmit: () => void;
  isPending: boolean;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  onRegisterSubmit,
  isPending,
}) => {
  const { formState, setValue } = useFormContext<RegisterFormValues>();

  return (
    <VStack gap="$4">
      <FormControl size="sm" isInvalid={!!formState.errors.email}>
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="text"
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            onChangeText={(text) => setValue("email", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.email?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl size="sm" isInvalid={!!formState.errors.password}>
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            autoCapitalize="none"
            onChangeText={(text) => setValue("password", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.password?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button
        variant="solid"
        bg="$blue600"
        $active-bg="$blue800"
        onPress={onRegisterSubmit}
        isDisabled={isPending}
      >
        <ButtonText>Sign up</ButtonText>
      </Button>
    </VStack>
  );
};
