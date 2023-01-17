import { Role } from '@roles/entities/Role';
import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';

type ShowRoleDTOParams = {
  id: string;
};

export class ShowRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: ShowRoleDTOParams): Promise<Role> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not Found', 404);
    }

    return role;
  }
}
