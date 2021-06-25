import { getCustomRepository, Repository } from "typeorm";

import { ComplimentsRepository } from "../repositories/ComplimentsRepository";
import { UsersRepository } from "../repositories/UsersRepository";
import { IComplimentRequest } from "../types/IComplimentType";
import { Compliment } from "../entities/Compliment";
import { User } from "../entities/User";

class ComplimentsService {
  private complimentsRepository: Repository<Compliment>;
  private usersRepository: Repository<User>;

  constructor() {
    this.complimentsRepository = getCustomRepository(ComplimentsRepository);
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create({
    user_sender,
    user_receiver,
    tag_id,
    message
  }: IComplimentRequest) {
    if (user_sender === user_receiver) {
      throw new Error("O receptor tem que ser diferente do emissor.");
    }

    const userSenderAlreadyExists = await this.usersRepository.findOne(user_sender);

    if (!userSenderAlreadyExists) {
      throw new Error("Emissor não encontrado.");
    }

    const userReceiveAlreadyExists = await this.usersRepository.findOne(user_receiver);

    if (!userReceiveAlreadyExists) {
      throw new Error("Receptor não encontrado.");
    }

    const compliment = this.complimentsRepository.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    });

    await this.complimentsRepository.save(compliment);

    return compliment;
  }
}

export { ComplimentsService };