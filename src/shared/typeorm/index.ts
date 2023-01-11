import { DataSource } from 'typeorm';
import { CreateRolesTable1673465678142 } from './migrations/1673465678142-CreateRolesTable';

export const dataSource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [],
  migrations: [CreateRolesTable1673465678142],
});
