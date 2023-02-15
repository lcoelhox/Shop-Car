import { NextFunction, Request, Response } from 'express';
import CarService from '../Services/CarService';
import ICar from '../Interfaces/ICar';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async createCar() {
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status || false,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createCar(car);
      return this.res.status(201).json(newCar);
    } catch (err) {
      this.next(err);
    }
  }

  public async getAll() {
    try {
      const cars = await this.service.getAllCars();
      return this.res.status(200).json(cars);
    } catch (err) {
      this.next(err);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      const car = await this.service.getCarById(id);
      return this.res.status(200).json(car);
    } catch (err) {
      this.next(err);
    }
  }

  public async updateById() {
    try {
      const { id } = this.req.params;
      const { body } = this.req;
      const updateCar = await this.service.updateCarById(id, body);
      return this.res.status(200).json(updateCar);
    } catch (err) {
      this.next(err);
    }
  }
}

export default CarController;