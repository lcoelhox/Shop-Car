import {
  Model,
  Schema,
  model,
  models,
  UpdateQuery,
  // isValidObjectId,
} from 'mongoose';

abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async update(id: string, obj: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }

  public async findById(_id: string): Promise<T | null> {
    const car = await this.model.findOne({ _id });
    return car;
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findById(id);
  }
}

export default AbstractODM;