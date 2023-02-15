import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import { motorcycleNotFound, validateMotorcycleExists } from '../Middlewares/motorcycles.validate';

const routes = Router();

routes.post('/', (req, res, next) => new MotorcycleController(req, res, next).createMotocycle());

routes.get('/', (req, res, next) => new MotorcycleController(req, res, next).getAll());

routes.get(
  '/:id',
  motorcycleNotFound,
  validateMotorcycleExists,
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default routes;