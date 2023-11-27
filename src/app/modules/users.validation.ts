import { z } from 'zod';

const UserFullNameSchema = z.object({
  firstName: z.string().min(1).max(20),
  lastName: z.string().min(1).max(20),
});

const AddressSchema = z.object({
  street: z.string(),
  city: z.string(),
  country: z.string(),
});

const OrderSchema = z.object({
  productName: z.string().min(1),
  price: z.number().min(0),
  quantity: z.number().min(1),
});

const UserValidationSchema = z.object({
  userId: z.number().int(),
  username: z.string().min(1),
  password: z.string().min(1).max(20),
  fullName: UserFullNameSchema,
  age: z.number().int().min(0),
  email: z.string().email(),
  isActive: z.boolean(),
  hobbies: z.array(z.string()),
  address: AddressSchema,
  orders: z.array(OrderSchema).optional(),
});

export { UserValidationSchema };
