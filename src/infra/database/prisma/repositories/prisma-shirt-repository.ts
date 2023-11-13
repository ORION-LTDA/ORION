import { ShirtRepository } from '../../../../application/repositories/shirt-repository';
import { Shirt } from '../../../../domain/entities/shirt';
import { PrismaShirtMapper } from '../mappers/prisma-shirt-mapper';
import { prisma } from '../prisma-client';

export class PrismaShirtRepository implements ShirtRepository {
  async create(shirt: Shirt): Promise<void> {
    const data = PrismaShirtMapper.ToPrisma(shirt);

    await prisma.shirt.create({ data });
  }

  async update(shirt: Shirt): Promise<void> {
    const data = PrismaShirtMapper.ToPrisma(shirt);
    await prisma.shirt.update({ data, where: { id: data.id } });
  }

  async findAll(): Promise<Shirt[]> {
    const shirts = await prisma.shirt.findMany();
    return shirts.map(PrismaShirtMapper.ToDomain);
  }

  async findAllAvailable(): Promise<Shirt[]> {
    const shirts = await prisma.shirt.findMany({
      where: {
        status: true,
      },
    });
    return shirts.map(PrismaShirtMapper.ToDomain);
  }

  async findById(id: string): Promise<Shirt | null> {
    const shirt = await prisma.shirt.findUnique({ where: { id } });

    if (!shirt) return null;

    return PrismaShirtMapper.ToDomain(shirt);
  }

  async findByCode(code: string): Promise<Shirt | null> {
    const shirt = await prisma.shirt.findUnique({ where: { code } });

    if (!shirt) return null;

    return PrismaShirtMapper.ToDomain(shirt);
  }

  async findBySize(size: string): Promise<Shirt[]> {
    const shirts = await prisma.shirt.findMany({
      where: {
        size,
      },
    });

    return shirts.map(PrismaShirtMapper.ToDomain);
  }
}
