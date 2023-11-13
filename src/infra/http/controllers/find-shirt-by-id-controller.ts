import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindShirtByIdUseCase } from '../../../application/use-cases/find-shirt-by-id-use-case';



export class FindShirtByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body;

    const findByIdUseCase = container.resolve(FindShirtByIdUseCase);

    const shirt = await findByIdUseCase.execute(id);

    return response.status(200).json(shirt);
  }
}
