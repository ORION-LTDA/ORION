import { Prisma } from '@prisma/client';
import { Shirt } from '../../../../domain/entities/shirt';


export class PrismaShirtMapper {
  public static ToPrisma(shirt: Shirt): Prisma.ShirtUncheckedCreateInput {
    return {
      id: shirt.id,
      code: shirt.code,
      size: shirt.size,
      color: shirt.color,
      price: shirt.price,
      image: shirt.image,
      status: shirt.status,
    };
  }
  public static ToDomain(shirt: Prisma.ShirtUncheckedCreateInput): Shirt {
    return Shirt.create(
      {
        code: shirt.id,
        color: shirt.color,
        image: shirt.image,
        price: shirt.price,
        size: shirt.size,
        status: shirt.status,
      },
      shirt.id,
    );
  }
}
