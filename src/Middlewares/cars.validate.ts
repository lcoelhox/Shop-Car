import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import CarODM from '../Models/CarODM';

const carNotFound = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(422).json({ message: 'Invalid mongo id' });
    return;
  }

  next();
};

const validateCarExists = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  const { id } = req.params;
  const car = await new CarODM().findById(id);

  if (!car) {
    res.status(404).json({ message: 'Car not found' });
    return;
  }

  next();
};

export { carNotFound, validateCarExists };