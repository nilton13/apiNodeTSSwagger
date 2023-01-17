import { RolesRepository } from '@roles/repositories/RolesRepository';
import { AppError } from '@shared/errors/AppError';

type DeleteRoleDTOParams = {
  id: string;
};

export class DeleteRoleUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ id }: DeleteRoleDTOParams): Promise<void> {
    const role = await this.rolesRepository.findById(id);

    if (!role) {
      throw new AppError('Role not Found', 404);
    }

    await this.rolesRepository.delete(role);
  }
}
