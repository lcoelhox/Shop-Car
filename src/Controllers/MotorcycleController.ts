import { NextFunction, Request, Response } from 'express';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycles from '../Interfaces/IMotorcycle';

class MotocycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async createMotocycle() {
    const motocycle: IMotorcycles = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotocycle = await this.service.createMotocycle(motocycle);
      return this.res.status(201).json(newMotocycle);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    try {
      const motorcycles = await this.service.getAllMotorcycles();
      return this.res.status(200).json(motorcycles);
    } catch (err) {
      this.next(err);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const motorcycle = await this.service.getMotorcycleById(id);
      return this.res.status(200).json(motorcycle);
    } catch (err) {
      this.next(err);
    }
  }
}

export default MotocycleController;