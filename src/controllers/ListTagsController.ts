import { Request, Response } from "express";

import { ListTagsService } from "../services/ListTagsService";
import { IResponseController } from "../types/IResponseController";

class ListTagsController {
  async handle(request: Request, response: Response): Promise<Response<IResponseController>> {
    const lisTagsService = new ListTagsService();

    const tags = await lisTagsService.execute();

    return response.status(200).json({
      status: "ok",
      data: tags,
    } as IResponseController);
  }
}

export { ListTagsController };
