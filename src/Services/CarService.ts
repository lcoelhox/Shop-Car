import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async createCar(car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const resultCar = await carODM.create(car);
    return this.createCarDomain(resultCar);
  }

  public async getAllCars(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const resultCar = await carODM.findAll();
    const array = resultCar.map((car) => this.createCarDomain(car));
    return array;
  }

  public async getCarById(id: string): Promise<(Car | null)> {
    const carODM = new CarODM();
    const resultCar = await carODM.findById(id);
    return this.createCarDomain(resultCar);
  }

  public async updateCarById(id: string, car: Partial<ICar>): Promise<(Car | null)> {
    const carODM = new CarODM();
    const updatedCar = await carODM.update(id, car);
    return this.createCarDomain(updatedCar);
  }
}

export default CarService;