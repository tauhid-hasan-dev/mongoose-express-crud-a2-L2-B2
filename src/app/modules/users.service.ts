import { TUser } from './users.interface';
import UserModel from './users.model';

const createSingleUser = async (data: TUser) => {
  const user = UserModel.create(data);
  return user;
};

export const userServices = {
  createSingleUser,
};
