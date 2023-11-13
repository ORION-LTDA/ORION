import { container } from 'tsyringe';

import { PrismaShirtRepository } from '../database/prisma/repositories/prisma-shirt-repository';
import { ShirtRepository } from '../../application/repositories/shirt-repository';

container.registerSingleton<ShirtRepository>('PrismaShirtRepository', PrismaShirtRepository);
