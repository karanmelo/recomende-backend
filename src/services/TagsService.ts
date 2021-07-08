import { getCustomRepository, Repository } from "typeorm";

import { Tag } from "../entities/Tag";
import { TagsRepository } from "../repositories/TagsRepository";
import { ITag } from "../types/ITag";

class TagsService {
  private tagsRepository: Repository<Tag>;

  constructor() {
    this.tagsRepository = getCustomRepository(TagsRepository);
  }

  async create(name: string): Promise<ITag> {
    if (!name) {
      throw new Error("É necessário informar o parâmetro name.");
    }

    const tagAlreadyExists = await this.tagsRepository.findOne({ name });

    if (tagAlreadyExists) {
      throw new Error("Já existe registro para a tag informada.");
    }

    const tag: Tag = this.tagsRepository.create({ name });

    await this.tagsRepository.save(tag);

    return {
      id: tag.id,
      name: tag.name,
    } as ITag;
  }
}

export { TagsService };
