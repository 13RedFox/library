import { z } from 'zod';

export const registerSchema = z.object({
  firstName: z.string().min(3, { message: 'First name must be atleast 3 characters' }),
  lastName: z.string().min(3, { message: 'Last name must be atleast 3 characters' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  password: z.string().min(6, { message: 'Password must be atleast 6 characters' }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
