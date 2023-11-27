import { Request, Response } from 'express';
import { userServices } from './users.service';
import { UserValidationSchema } from './users.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;

    const zodParsedData = UserValidationSchema.parse(user);

    const result = await userServices.createSingleUser(zodParsedData);

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
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
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const getSingleUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const result = await userServices.getSingleUser(userId);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User fetched successfully!',
        data: result,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const zodParsedData = UserValidationSchema.parse(user);
    const result = await userServices.updateSingleUser(userId, zodParsedData);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.deleteSingleUser(userId);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User deleted successfully!',
        data: null,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

//!================  BONUST PART ======================

const addProductIntoOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = req.body;
    const result = await userServices.addProductIntoOrder(userId, user);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};

const getProductFromOrder = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.getAllProductFromOrder(userId);
    console.log(result);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Order fetched successfully!',
        data: result,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const calculateProductPrices = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await userServices.calculateProductPrices(userId);
    console.log(result);

    if (result) {
      res.status(200).json({
        success: true,
        message: 'Total price calculated successfully!',
        data: result,
      });
    } else if (result === null) {
      res.json({
        success: false,
        message: 'User not found',
        error: {
          code: 404,
          description: 'User not found!',
        },
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUser,
  deleteUser,
  addProductIntoOrder,
  getProductFromOrder,
  calculateProductPrices,
};
