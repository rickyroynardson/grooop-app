import { z } from "zod";

export const editProfileFormSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
});

export type EditProfileFormValues = z.infer<typeof editProfileFormSchema>;
