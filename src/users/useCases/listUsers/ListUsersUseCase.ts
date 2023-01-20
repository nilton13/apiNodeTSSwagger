import {
  IUserRepository,
  UsersPaginateProps,
} from '@users/repositories/IUserRepository';
import { inject, injectable } from 'tsyringe';

type ListUsersUseCaseParams = {
  page: number;
  limit: number;
};

@injectable()
export class ListUsersUseCase {
  constructor(
    @inject('UserRepository')
    private usersRepository: IUserRepository,
  ) {}

  async execute({
    page,
    limit,
  }: ListUsersUseCaseParams): Promise<UsersPaginateProps> {
    const take = limit;
    const skip = (Number(page) - 1) * take;
    return this.usersRepository.findAll({ page, skip, take });
  }
}
