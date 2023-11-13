import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { UpdateShirtUseCase } from '../../../application/use-cases/update-shirt-use-case';

export class UpdateShirtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, code, color, image, price, size, status } = request.body;

    const updateShirtUseCase = container.resolve(UpdateShirtUseCase);

    await updateShirtUseCase.execute({
      id,
      code,
      color,
      image,
      price,
      size,
      status,
    });

    return response.status(204).send();
  }
}
