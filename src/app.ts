import express from 'express';
import routesCar from './Routes/CarRoute';
import routesMotorcycle from './Routes/MotorcycleRoute';

const app = express();
app.use(express.json());

app.use('/cars', routesCar);
app.use('/motorcycles', routesMotorcycle);

export default app;
