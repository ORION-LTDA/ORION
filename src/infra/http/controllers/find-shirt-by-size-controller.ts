import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { FindShirtBySizeUseCase } from '../../../application/use-cases/find-shirt-by-size-use-case';

export class FindShirtBySizeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { size } = request.body;

    const findShirtBySizeUseCase = container.resolve(FindShirtBySizeUseCase);

    const shirts = await findShirtBySizeUseCase.execute(size);

    return response.status(200).json(shirts);
  }
}
