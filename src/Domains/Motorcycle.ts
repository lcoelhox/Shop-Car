import IMotorcycles from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motocycles extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motocycles: IMotorcycles) {
    super(motocycles);
    this.category = motocycles.category;
    this.engineCapacity = motocycles.engineCapacity;
  }

  public setDoorsQty(category: string) {
    this.category = category;
  }

  public getDoorsQty() {
    return this.category;
  }

  public setSeatsQty(engineCapacity: number) {
    this.engineCapacity = engineCapacity;
  }

  public getSeatsQty() {
    return this.engineCapacity;
  }
}

export default Motocycles;