import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindAllAvailableShirtUseCase } from '../../../application/use-cases/find-all-available-shirts-use-case';

export class FindAllAvailableShirtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllAvailableShirtUseCase = container.resolve(FindAllAvailableShirtUseCase);

    const shirt = await findAllAvailableShirtUseCase.execute();

    return response.status(200).json(shirt);
  }
}
