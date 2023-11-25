import { Request, Response } from 'express';
import { userServices } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;

    const result = await userServices.createSingleUser(user);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUser();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const {userId} = req.params
    const result = await userServices.getSingleUser(userId);

    res.status(200).json({
      success: true,
      message: 'User fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.json({
        success: false,
        message: "User not found",
        error: {
            code: 404,
            description: "User not found!"
        }
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
};
