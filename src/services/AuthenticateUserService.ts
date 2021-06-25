import { getCustomRepository, Repository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";
import { IAuthenticateRequest } from "../types/IAuthenticate";
import { IUser } from "../types/IUserType";

class AuthenticateUserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async execute({ email, password }: IAuthenticateRequest) {
    if (!email) {
      throw new Error("O e-mail não foi informado.");
    }

    const user = await this.usersRepository.findOne({ email });

    if (!user) {
      throw new Error("E-mail/Senha incorreto.");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail/Senha incorreto.");
    }

    const token = sign(
      {
        email: user.email
      },
      "f918e16d66570bdefe05f53d2fa9e257",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}

export { AuthenticateUserService };