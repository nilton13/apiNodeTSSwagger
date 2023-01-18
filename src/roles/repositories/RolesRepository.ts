import { Role } from '@roles/entities/Role';
import { dataSource } from '@shared/typeorm';
import { Repository } from 'typeorm';
import {
  CreateRoleDTO,
  IRolesRepository,
  PaginateParams,
  RolesPaginateProps,
} from './IRolesRepository';

export class RolesRepository implements IRolesRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = dataSource.getRepository(Role);
  }

  async create({ name }: CreateRoleDTO): Promise<Role> {
    const role = await this.repository.create({ name });
    return await this.repository.save(role);
  }

  async save(role: Role): Promise<Role> {
    return await this.repository.save(role);
  }

  async delete(role: Role): Promise<void> {
    await this.repository.remove(role);
  }

  async findAll({
    page,
    skip,
    take,
  }: PaginateParams): Promise<RolesPaginateProps> {
    const [roles, count] = await this.repository
      .createQueryBuilder()
      .skip(skip)
      .take(take)
      .getManyAndCount();
    const result = {
      per_page: take,
      total: count,
      current_page: page,
      data: roles,
    };

    return result;
  }

  async findByName(name: string): Promise<Role | null> {
    return this.repository.findOneBy({ name });
  }

  async findById(id: string): Promise<Role | null> {
    return this.repository.findOneBy({ id });
  }
}
