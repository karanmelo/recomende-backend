import { Request, Response } from "express";
import { ComplimentsService } from "../services/ComplimentsService";
import { IComplimentRequest } from "../types/IComplimentType";

class ComplimentsController {

  async create(request: Request, response: Response) {
    const {
      user_receiver,
      tag_id,
      message
    } = request.body as IComplimentRequest;
    const { user_id } = request;

    const complimentsService = new ComplimentsService();

    const compliment = await complimentsService.create({
      user_sender: user_id,
      user_receiver,
      tag_id,
      message
    });

    response.status(201).json({
      status: "ok",
      data: compliment
    });
  }
}

export { ComplimentsController };