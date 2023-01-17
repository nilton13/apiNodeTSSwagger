import { Request, Response } from 'express';
import { ListRolesUseCase } from './ListRolesUseCase';

export class ListRolesController {
  constructor(private listRoleUseCase: ListRolesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const page =
      request.query.page && Number(request.query.page) > 0
        ? Number(request.query.page)
        : 1;

    const limit =
      request.query.limit && Number(request.query.limit)
        ? Number(request.query.limit)
        : 15;
    const roles = await this.listRoleUseCase.execute({ page, limit });

    return response.json(roles);
  }
}
