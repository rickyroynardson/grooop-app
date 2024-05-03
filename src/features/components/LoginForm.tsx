import {
  Button,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";

export const LoginForm: React.FC = () => {
  return (
    <VStack gap="$4">
      <FormControl size="sm">
        <FormControlLabel>
          <FormControlLabelText>Email</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type="text" />
        </Input>
      </FormControl>
      <FormControl size="sm">
        <FormControlLabel>
          <FormControlLabelText>Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField type="password" />
        </Input>
      </FormControl>
      <Button variant="solid" bg="$blue600" $active-bg="$blue800">
        <ButtonText>Sign in</ButtonText>
      </Button>
    </VStack>
  );
};
