import { z } from 'zod';

// Define sub-schemas for reusability
const UserFullNameSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  lastName: z.string().min(1).max(20),
});

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

// Define the main User schema
const UserValidationSchema = z.object({
  userId: z.number(),
  username: z.string(),
  password: z.string().max(20),
  fullName: UserFullNameSchema,
  age: z.number(),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressSchema,
});

export { UserValidationSchema };
