import { inject, injectable } from 'tsyringe';
import { ShirtRepository } from '../repositories/shirt-repository';
import { AppError } from '../../core/error/AppError';

export interface UpdateShirtRequest {
  id: string;
  code: string;
  size: string;
  color: string;
  price: number;
  image: string;
  status?: boolean;
}

@injectable()
export class UpdateShirtUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(data: UpdateShirtRequest): Promise<void> {
    const shirt = await this.repository.findById(data.id);

    if (!shirt) throw new AppError(400, 'shirt not exist');

    const codeAlready = await this.repository.findByCode(data.code);

    if (codeAlready && codeAlready.id !== data.id) throw new AppError(400, 'code already registered');

    shirt.code = data.code;
    shirt.color = data.color;
    shirt.image = data.image;
    shirt.price = data.price;
    shirt.status = data.status;
    shirt.size = data.size;

    await this.repository.update(shirt);
  }
}
