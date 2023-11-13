import { inject, injectable } from 'tsyringe';
import { Shirt } from '../../domain/entities/shirt';
import { ShirtRepository } from '../repositories/shirt-repository';
import { AppError } from '../../core/error/AppError';

@injectable()
export class FindShirtByIdUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(id: string): Promise<Shirt> {
    const shirt = await this.repository.findById(id);

    if (!shirt) throw new AppError(400, 'shirt not found');

    return shirt;
  }
}
