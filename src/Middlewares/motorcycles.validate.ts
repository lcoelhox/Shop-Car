import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import MotorcycleODM from '../Models/MotorcycleODM';

const motorcycleNotFound = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ message: 'Invalid mongo id' });
    return;
  }

  next();
};

const validateMotorcycleExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  const motorcycle = await new MotorcycleODM().findById(id);

  if (!motorcycle) {
    res.status(404).json({ message: 'Motorcycle not found' });
    return;
  }

  next();
};

export { motorcycleNotFound, validateMotorcycleExists };