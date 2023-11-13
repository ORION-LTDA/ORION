import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindShirtByCodeUseCase } from '../../../application/use-cases/find-shirt-by-code-use-case';

export class FindShirtByCodeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body;

    const findShirtByCodeUseCase = container.resolve(FindShirtByCodeUseCase);

    const shirt = await findShirtByCodeUseCase.execute(code);

    return response.status(200).json(shirt);
  }
}
