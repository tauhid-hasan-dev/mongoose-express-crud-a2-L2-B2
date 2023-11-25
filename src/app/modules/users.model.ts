import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TUser } from './users.interface';

const userFullNameSchema = new Schema<TFullName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
});

const addressSchema = new Schema<TAddress>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
});

const UserSchema = new Schema<TUser>({
  userId: {
    type: Number,
    required: [true, 'User ID field is required'],
    unique: true,
  },
  username: {
    type: String,
    required: [true, 'Username field is required'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 character'],
  },
  fullName: {
    type: userFullNameSchema,
    required: [true, 'Full Name field is required'],
  },
  age: { type: Number, required: [true, 'Age field is required'] },
  email: { type: String, required: [true, 'Email field is required'], unique: true, },
  isActive: { type: Boolean, required: [true, 'isActive field is required'] },
  hobbies: [{ type: String }],
  address: {
    type: addressSchema,
    required: [true, 'Address field is required'],
  },
});

const UserModel = model<TUser>('User', UserSchema);

export default UserModel;
