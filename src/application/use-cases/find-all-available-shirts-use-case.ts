import { inject, injectable } from 'tsyringe';
import { ShirtRepository } from '../repositories/shirt-repository';
import { Shirt } from '../../domain/entities/shirt';

@injectable()
export class FindAllAvailableShirtUseCase {
  constructor(@inject('PrismaShirtRepository') private repository: ShirtRepository) {}

  async execute(): Promise<Shirt[]> {
    const shirts = await this.repository.findAllAvailable();

    return shirts;
  }
}
