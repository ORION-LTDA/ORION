import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllShirtUseCase } from '../../../application/use-cases/find-all-shirt-use-case';

export class FindAllShirtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllShirtUseCase = container.resolve(FindAllShirtUseCase);

    const shirt = await findAllShirtUseCase.execute();

    return response.status(200).json(shirt);
  }
}
