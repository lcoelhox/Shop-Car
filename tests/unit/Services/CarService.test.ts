import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import CarService from '../../../src/Services/CarService';
// import Car from '../../../src/Domains/Car';

const inputMockAllCars = [
  {
    id: '63eac87da09a66d503171621',
    model: 'Uno da Escada',
    year: 1960,
    color: 'Red',
    status: false,
    buyValue: 1500,
    doorsQty: 2,
    seatsQty: 2,
  },
];

const validId = '63eac87da09a66d503171621';

const inputMockIdCars = {
  id: '63eac87da09a66d503171621',
  model: 'Uno da Escada',
  year: 1960,
  color: 'Red',
  status: false,
  buyValue: 1500,
  doorsQty: 2,
  seatsQty: 2,
};

describe('Testando a camada service da rota /car', function () {
  it('Deveria buscar todos os carros com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'find').resolves(inputMockAllCars);

    // Act
    const service = new CarService();
    const result = await service.getAllCars();

    // Assert
    expect(result).to.be.deep.equal(inputMockAllCars);
  });

  it('Deveria buscar um carro com SUCESSO', async function () {
    // Arrange
    sinon.stub(Model, 'findOne').resolves(inputMockIdCars);

    // Act
    const service = new CarService();
    const result = await service.getCarById(validId);

    // Assert
    expect(result).to.be.deep.equal(inputMockIdCars);
  });

  afterEach(function () {
    sinon.restore();
  });
});