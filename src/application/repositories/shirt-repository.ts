import { Shirt } from '../../domain/entities/shirt';

export interface ShirtRepository {
  findAll(): Promise<Shirt[]>;
  findAllAvailable(): Promise<Shirt[]>;
  findByCode(code: string): Promise<Shirt | null>;
  findById(id: string): Promise<Shirt | null>;
  findBySize(size: string): Promise<Shirt[]>;
  create(data: Shirt): Promise<void>;
  update(data: Shirt): Promise<void>;
}
