import { Role } from '@roles/entities/Role';
import { User } from '@users/entities/User';
import { DataSource } from 'typeorm';
import { CreateRolesTable1673465678142 } from './migrations/1673465678142-CreateRolesTable';
import { CreateUsersTable1674002017314 } from './migrations/1674002017314-CreateUsersTable';
import { AddRoleIdToUsersTable1674002511833 } from './migrations/1674002511833-AddRoleIdToUsersTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role, User],
  migrations: [
    CreateRolesTable1673465678142,
    CreateUsersTable1674002017314,
    AddRoleIdToUsersTable1674002511833,
  ],
});
