import { TOrder, TUser } from './users.interface';
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

const updateSingleUser = async (id: string, data: TUser) => {
  let user = null;
  if (await UserModel.isUserExists(id)) {
    user = await UserModel.updateOne({ userId: id }, { $set: data });
  }
  return user;
};

const deleteSingleUser = async (id: string) => {
  let user = null;
  if (await UserModel.isUserExists(id)) {
    user = await UserModel.deleteOne({ userId: id });
  }
  return user;
};

const addProductIntoOrder = async (id: string, data: TOrder) => {
  let user = null;
  if (await UserModel.isUserExists(id)) {
    user = await UserModel.updateOne(
      { userId: id },
      {
        $addToSet: {
          orders: { $each: [data] },
        },
      },
    );
  }
  console.log({ user });
  return user;
};

const getAllProductFromOrder = async (id: string) => {
  let orders = null;
  if (await UserModel.isUserExists(id)) {
    orders = await UserModel.findOne({ userId: id }, 'orders');
  }
  return orders;
};

export const userServices = {
  createSingleUser,
  getAllUser,
  getSingleUser,
  updateSingleUser,
  deleteSingleUser,
  addProductIntoOrder,
  getAllProductFromOrder,
};
