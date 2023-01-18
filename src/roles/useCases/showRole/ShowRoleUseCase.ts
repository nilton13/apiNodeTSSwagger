import { Role } from '@roles/entities/Role';
import { IRolesRepository } from '@roles/repositories/IRolesRepository';
import { AppError } from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

type ShowRoleDTOParams = {
  id: string;
};

@injectable()
export class ShowRoleUseCase {
  constructor(
    @inject('RolesRepository')
    private rolesRepository: IRolesRepository,
  ) {}

  async execute({ id }: ShowRoleDTOParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not Found', 404);
    }

    return role;
  }
}
