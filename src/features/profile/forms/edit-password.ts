import { z } from "zod";

export const editPasswordFormSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(8),
  confirmPassword: z.string().min(8),
});

export type EditPasswordFormValues = z.infer<typeof editPasswordFormSchema>;
