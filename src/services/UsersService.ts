import { getCustomRepository, Repository } from 'typeorm';

import { User } from '../entities/User';
import { UsersRepository } from '../repositories/UsersRepository';

import { IUser } from '../types/IUserType';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({ name, email, password, admin }: IUser) {
    const userAlreadyExists = await this.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('Já existe usuário cadastro com o e-mail fornecido.');
    }

    const user = this.usersRepository.create({
      name,
      email,
      password,
      admin
    });

    await this.usersRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });
    return user;
  }

}

export { UsersService };