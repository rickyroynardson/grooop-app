import {
  Button,
  ButtonText,
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlHelper,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  VStack,
} from "@gluestack-ui/themed";
import { useFormContext } from "react-hook-form";
import { EditProfileFormValues } from "../forms/edit-profile";
import { FormControlHelperText } from "@gluestack-ui/themed";

interface EditProfileFormProps {
  onEditProfileSubmit: () => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({
  onEditProfileSubmit,
}) => {
  const { formState, setValue } = useFormContext<EditProfileFormValues>();

  return (
    <VStack gap="$4">
      <FormControl size="sm" isInvalid={!!formState.errors.firstName}>
        <FormControlLabel>
          <FormControlLabelText>First Name</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="text"
            autoCapitalize="none"
            defaultValue={formState.defaultValues?.firstName}
            onChangeText={(text) => setValue("firstName", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.firstName?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
      <FormControl size="sm" isInvalid={!!formState.errors.lastName}>
        <FormControlLabel>
          <FormControlLabelText>Last Name</FormControlLabelText>
        </FormControlLabel>
        <Input>
          <InputField
            type="text"
            autoCapitalize="none"
            defaultValue={formState.defaultValues?.lastName}
            onChangeText={(text) => setValue("lastName", text)}
          />
        </Input>
        <FormControlError>
          <FormControlErrorText>
            {formState.errors.lastName?.message}
          </FormControlErrorText>
        </FormControlError>
      </FormControl>
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
            defaultValue={formState.defaultValues?.email}
            onChangeText={(text) => setValue("email", text)}
          />
        </Input>
        <FormControlHelper>
          <FormControlHelperText>
            Email change will require account re-verification
          </FormControlHelperText>
        </FormControlHelper>
      </FormControl>
      <Button
        variant="solid"
        bg="$blue600"
        $active-bg="$blue800"
        onPress={onEditProfileSubmit}
      >
        <ButtonText>Save</ButtonText>
      </Button>
    </VStack>
  );
};
