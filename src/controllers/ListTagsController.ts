import { Request, Response } from "express";

import { ListTagsService } from "../services/ListTagsService";

class ListTagsController {
  async handle(request: Request, response: Response) {
    const lisTagsService = new ListTagsService();

    const tags = await lisTagsService.execute();

    response.status(200).json({
      status: "ok",
      data: tags
    });
  }
}

export { ListTagsController };