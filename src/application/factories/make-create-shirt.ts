import { CreateShirtUseCase } from '../use-cases/create-shirt-use-case';
import { PrismaShirtRepository } from '../../infra/database/prisma/repositories/prisma-shirt-repository';

export function makeCreateShirt() {
  const prismaShirtRepository = new PrismaShirtRepository();
  return new CreateShirtUseCase(prismaShirtRepository);
}
