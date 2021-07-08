import { getCustomRepository } from "typeorm";
import { classToPlain } from "class-transformer";

import { TagsRepository } from "../repositories/TagsRepository";
import { ITag } from "../types/ITag";

class ListTagsService {
  async execute(): Promise<ITag[]> {
    const tagsRepository = getCustomRepository(TagsRepository);

    const tags = await tagsRepository.find();

    return classToPlain(tags).map((tag: ITag): ITag => {
      return {
        id: tag.id,
        name: tag.name,
        nameCustom: tag.nameCustom,
      } as ITag;
    });
  }
}

export { ListTagsService };
