import { Schema, model } from 'mongoose';
import { TAddress, TFullName, TUser, UserModelStatic } from './users.interface';
import config from '../config';
import bcrypt from 'bcrypt';

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

const UserSchema = new Schema<TUser, UserModelStatic>({
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
    default: undefined,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 character'],
  },
  fullName: {
    type: userFullNameSchema,
    required: [true, 'Full Name field is required'],
  },
  age: { type: Number, required: [true, 'Age field is required'] },
  email: {
    type: String,
    required: [true, 'Email field is required'],
    unique: true,
  },
  isActive: { type: Boolean, required: [true, 'isActive field is required'] },
  hobbies: [{ type: String }],
  address: {
    type: addressSchema,
    required: [true, 'Address field is required'],
  },
});

// pre save middleware for hashing password
UserSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcrypt.hash(
    user.password || '',
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// password is not included in the response
UserSchema.post('save', function (doc, next) {
  doc.password = undefined;
  next();
});

//this is static method for checking if user is exists or not
UserSchema.statics.isUserExists = async function (id: string) {
  console.log(id);
  const existingUser = await UserModel.findOne({ userId: id });
  console.log({ existingUser });
  return existingUser;
};

const UserModel = model<TUser, UserModelStatic>('User', UserSchema);

export default UserModel;
