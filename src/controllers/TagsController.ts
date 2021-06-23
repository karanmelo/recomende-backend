import { Request, Response } from "express";

import { TagsService } from "../services/TagsService";

class TagsController {
  async create(request: Request, response: Response) {
    const { name } = request.body;

    const tagsService = new TagsService();
    const tag = await tagsService.create(name);

    response.status(201).json({
      status: "ok",
      data: tag
    });
  }
}

export { TagsController };