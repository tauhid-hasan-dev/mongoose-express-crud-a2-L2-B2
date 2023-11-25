import { TUser } from './users.interface';
import UserModel from './users.model';

const createSingleUser = async (data: TUser) => {
  const user = await UserModel.create(data);
  return user;
};

const getAllUser = async () => {
  const users = await UserModel.find();
  return users;
};

const getSingleUser = async (id: string) => {
  console.log(id);
  const user = await UserModel.findOne({ userId: id });
  console.log(user);
  return user;
};

export const userServices = {
  createSingleUser,
  getAllUser,
  getSingleUser,
};
