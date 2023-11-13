import { Router } from 'express';
import { shirtRoute } from './shirts-routes';

export const route = Router();

route.use('/shirt', shirtRoute);
