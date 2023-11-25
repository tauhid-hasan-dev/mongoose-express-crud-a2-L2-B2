import { Request, Response } from 'express';
import { userServices } from './users.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const {user} = req.body;
    
    const result = await userServices.createSingleUser(user);

    res.status(200).json({
        success: true,
        message: "User created successfully!",
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

export const userController = {
  createUser,
};
