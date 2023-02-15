import { Router } from 'express';
import CarController from '../Controllers/CarController';
import { carNotFound, validateCarExists } from '../Middlewares/cars.validate';

const routes = Router();

routes.post('/', (req, res, next) => new CarController(req, res, next).createCar());

routes.get('/', (req, res, next) => new CarController(req, res, next).getAll());

routes.get(
  '/:id',
  carNotFound,
  validateCarExists,
  (req, res, next) => new CarController(req, res, next)
    .getById(),
);

routes.put(
  '/:id',
  carNotFound,
  validateCarExists,
  (req, res, next) => new CarController(req, res, next).updateById(),
);

export default routes;