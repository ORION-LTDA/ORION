import { inject, injectable } from 'tsyringe';
import { ShirtRepository } from '../repositories/shirt-repository';
import { AppError } from '../../core/error/AppError';

@injectable()
export class FindShirtBySizeUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(size: string) {
    const shirt = await this.repository.findBySize(size);

    if (!shirt) throw new AppError(400, 'shirt not found');

    return shirt;
  }
}
