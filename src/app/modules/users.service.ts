import { TUser } from './users.interface';
import UserModel from './users.model';

const createSingleUser = async (data: TUser) => {
  const user = await UserModel.create(data);
  return user;
};

const getAllUser = async () => {
  const users = await UserModel.find(
    {},
    { username: 1, fullName: 1, age: 1, email: 1, address: 1 },
  );
  return users;
};

const getSingleUser = async (id: string) => {
  let user = null;
  if (await UserModel.isUserExists(id)) {
    user = await UserModel.findOne({ userId: id }, { password: 0 });
  }
  return user;
};

export const userServices = {
  createSingleUser,
  getAllUser,
  getSingleUser,
};
