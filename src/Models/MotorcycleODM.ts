import { Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    const schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async create(motocycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motocycle });
  }

  public async findAll(): Promise<IMotorcycle[]> {
    return this.model.find({});
  }

  public async findByKey(key: string): Promise<IMotorcycle[]> {
    return this.model.find({ key });
  }
}

export default MotorcycleODM;