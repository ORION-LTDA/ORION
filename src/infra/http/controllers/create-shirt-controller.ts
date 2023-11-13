import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../core/error/AppError';
import { CreateShirtUseCase } from '../../../application/use-cases/create-shirt-use-case';

export interface CreateShirtRequest {
  code: string;
  size: string;
  color: string;
  price: number;
  image: string;
  status?: boolean;
}

export class CreateShirtController {
  async handle(request: Request, response: Response): Promise<Response> {
    const data: CreateShirtRequest = request.body;

    const createShiertUseCase = container.resolve(CreateShirtUseCase);

    await createShiertUseCase.execute(data);

    return response.status(201).send();
  }
}
