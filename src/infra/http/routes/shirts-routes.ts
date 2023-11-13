import { Router } from 'express';
import { CreateShirtController } from '../controllers/create-shirt-controller';
import { FindAllShirtController } from '../controllers/find-all-shirt-controller';
import { FindAllAvailableShirtController } from '../controllers/find-all-available-shirt-controller';
import { FindShirtByIdController } from '../controllers/find-shirt-by-id-controller';
import { FindShirtByCodeController } from '../controllers/find-shirt-by-code-controller';
import { FindShirtBySizeController } from '../controllers/find-shirt-by-size-controller';
import { UpdateShirtController } from '../controllers/update-shirt-controller';

export const shirtRoute = Router();

const createShirtController = new CreateShirtController();
const findAllShirtController = new FindAllShirtController();
const findAllAvailableShirtController = new FindAllAvailableShirtController();
const findShirtByIdController = new FindShirtByIdController();
const findShirtByCodeController = new FindShirtByCodeController();
const findShirtBySizeController = new FindShirtBySizeController();
const updateShirtController = new UpdateShirtController();

shirtRoute.post('/register', createShirtController.handle);
shirtRoute.get('/', findAllShirtController.handle);
shirtRoute.get('/availables', findAllAvailableShirtController.handle);
shirtRoute.get('/id', findShirtByIdController.handle);
shirtRoute.get('/code', findShirtByCodeController.handle);
shirtRoute.get('/size', findShirtBySizeController.handle);

shirtRoute.patch('/update', updateShirtController.handle);
