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
import { EditPasswordFormValues } from "../forms/edit-password";

interface EditPasswordFormProps {
  onEditPasswordSubmit: () => void;
  isPending: boolean;
}

export const EditPasswordForm: React.FC<EditPasswordFormProps> = ({
  onEditPasswordSubmit,
  isPending,
}) => {
  const { formState, setValue } = useFormContext<EditPasswordFormValues>();

  return (
    <VStack gap="$4">
      <FormControl size="sm" isInvalid={!!formState.errors.currentPassword}>
        <FormControlLabel>
          <FormControlLabelText>Current Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            autoCapitalize="none"
            onChangeText={(text) => setValue("currentPassword", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.currentPassword?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl size="sm" isInvalid={!!formState.errors.newPassword}>
        <FormControlLabel>
          <FormControlLabelText>New Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            autoCapitalize="none"
            onChangeText={(text) => setValue("newPassword", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.newPassword?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl size="sm" isInvalid={!!formState.errors.confirmPassword}>
        <FormControlLabel>
          <FormControlLabelText>Confirm Password</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="password"
            autoCapitalize="none"
            onChangeText={(text) => setValue("confirmPassword", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.confirmPassword?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <Button
        variant="solid"
        bg="$blue600"
        $active-bg="$blue800"
        onPress={onEditPasswordSubmit}
        isDisabled={isPending}
      >
        <ButtonText>Save</ButtonText>
      </Button>
    </VStack>
  );
};
