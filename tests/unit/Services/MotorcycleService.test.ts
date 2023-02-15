import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

const outputMotorcycle = {
  id: '6348513f34c397abcad040b2',
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const inputMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Custom',
  engineCapacity: 600,
};

const arrayMockAllMotorcycle = [
  {
    id: '6348513f34c397abcad040b2',
    model: 'Honda CG 150 Titan',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 15.000,
    category: 'Street',
    engineCapacity: 150,
  },
  {
    id: '6348513f34c397abcad040b3',
    model: 'Honda Cb 300f Hornet',
    year: 2005,
    color: 'red',
    status: true,
    buyValue: 20.000,
    category: 'Street',
    engineCapacity: 300,
  },
];

describe('Testando a camada service da rota /motorcycles', function () {
  it('Testando a criação de uma moto com sucesso', async function () {
    // Arrange
    sinon.stub(Model, 'create').resolves(outputMotorcycle);
    const motorcycle = new Motorcycle(outputMotorcycle);

    // Act
    const response = await new MotorcycleService().createMotocycle(inputMotorcycle);

    // Assert
    expect(response).to.be.deep.equal(motorcycle);
  });

  it('Teste de busca de todas as motos', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(arrayMockAllMotorcycle);
    const motorcycle = arrayMockAllMotorcycle.map(
      (motocycle) => new Motorcycle(motocycle),
    );

    // Act
    const response = await new MotorcycleService().getAllMotorcycles();

    // Assert
    expect(response).to.be.deep.equal(motorcycle);
  });

  it('Teste de busca de uma moto por id', async function () {
    // Arrange
    sinon.stub(Model, 'findById').resolves(outputMotorcycle);
    const motorcycle = new Motorcycle(outputMotorcycle);

    // Act
    const response = await new MotorcycleService().getMotorcycleById(
      '63ea3df3c632aab1a78764e16',
    );

    // Assert
    expect(response).to.be.deep.equal(motorcycle);
  });

  afterEach(function () {
    sinon.restore();
  });
});