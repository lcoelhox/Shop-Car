import IVehicle from './IVehicle';

interface IMotocycles extends IVehicle {
  category: string,
  engineCapacity: number,
}

export default IMotocycles;