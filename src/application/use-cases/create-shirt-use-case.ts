import { inject, injectable } from 'tsyringe';
import { ShirtRepository } from '../repositories/shirt-repository';
import { AppError } from '../../core/error/AppError';
import { Shirt } from '../../domain/entities/shirt';

type CreateShirtRequest = {
  code: string;
  size: string;
  color: string;
  price: number;
  image: string;
  status?: boolean;
};

type CreateShirtUseCaseResponse = {
  shirt: Shirt;
};

@injectable()
export class CreateShirtUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(data: CreateShirtRequest): Promise<CreateShirtUseCaseResponse> {
    const shirtExists = await this.repository.findByCode(data.code);

    if (shirtExists) throw new AppError(400, 'code already registred');

    const shirt = Shirt.create({
      code: data.code,
      color: data.color,
      image: data.image,
      price: data.price,
      size: data.size,
      status: data.status,
    });

    await this.repository.create(shirt);

    return {
      shirt,
    };
  }
}
