import { getCustomRepository, Repository } from 'typeorm';
import { hash } from 'bcryptjs';

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

    const passwordHash = await hash(password, 8);

    const user = this.usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash
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