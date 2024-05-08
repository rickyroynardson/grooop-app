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
import { LoginFormValues } from "../forms/login";

interface LoginFormProps {
  onLoginSubmit: () => void;
  isPending: boolean;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  onLoginSubmit,
  isPending,
}) => {
  const { formState, setValue } = useFormContext<LoginFormValues>();

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
        onPress={onLoginSubmit}
        isDisabled={isPending}
      >
        <ButtonText>Sign in</ButtonText>
      </Button>
    </VStack>
  );
};
