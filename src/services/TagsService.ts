import { getCustomRepository, Repository } from "typeorm";

import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";

class TagsService {
  private tagsRepository: Repository<Tag>;

  constructor() {
    this.tagsRepository = getCustomRepository(TagsRepository);
  }

  async create(name: string) {
    if (!name) {
      throw new Error("É necessário informar o parâmetro name.");
    }

    const tagAlreadyExists = await this.tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Já existe registro para a tag informada.");
    }

    const tag = this.tagsRepository.create({ name });

    await this.tagsRepository.save(tag);

    return tag;
  }
}

export { TagsService };