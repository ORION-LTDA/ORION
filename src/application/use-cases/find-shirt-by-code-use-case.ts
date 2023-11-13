import { inject, injectable } from 'tsyringe';
import { ShirtRepository } from '../repositories/shirt-repository';
import { Shirt } from '../../domain/entities/shirt';
import { AppError } from '../../core/error/AppError';


@injectable()
export class FindShirtByCodeUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(code: string): Promise<Shirt> {
    const shirt = await this.repository.findByCode(code);

    if (!shirt) throw new AppError(400, 'shirt not found');

    return shirt;
  }
}
