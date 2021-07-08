import { Request, Response } from "express";

import { TagsService } from "../services/TagsService";
import { IResponseController } from "../types/IResponseController";

class TagsController {
  async create(request: Request, response: Response): Promise<Response<IResponseController>> {
    const { name } = request.body;

    const tagsService = new TagsService();
    const tag = await tagsService.create(name);

    return response.status(201).json({
      status: "ok",
      data: tag,
    } as IResponseController);
  }
}

export { TagsController };
