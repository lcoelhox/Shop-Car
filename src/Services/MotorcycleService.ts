import IMotorcycles from '../Interfaces/IMotorcycle';
import Motorcycle from '../Domains/Motorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotocycleService {
  private createMotocycleDomain(motocycle: IMotorcycles | null): Motorcycle | null {
    if (motocycle) {
      return new Motorcycle(motocycle);
    }
    return null;
  }

  public async createMotocycle(car: IMotorcycles): Promise<Motorcycle | null> {
    const motocycleODM = new MotorcycleODM();
    const resultMotocycle = await motocycleODM.create(car);
    return this.createMotocycleDomain(resultMotocycle);
  }

  public async getAllMotorcycles(): Promise<(Motorcycle | null)[]> {
    const motorcycleODM = new MotorcycleODM();
    const resultMotorcycle = await motorcycleODM.findAll();
    const array = resultMotorcycle.map((motorcycle) => this.createMotocycleDomain(motorcycle));
    return array;
  }

  public async getMotorcycleById(id: string): Promise<(Motorcycle | null)> {
    const motorcycleODM = new MotorcycleODM();
    const resultMotorcycle = await motorcycleODM.getById(id);
    return this.createMotocycleDomain(resultMotorcycle);
  }
}

export default MotocycleService;