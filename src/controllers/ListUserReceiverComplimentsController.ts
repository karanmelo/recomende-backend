import { Request, Response } from "express";
import { ListUserReceiverComplimentsService } from "../services/ListUserReceiverComplimentsService";

class ListUserReceiverComplimentsController {
  async handle(request: Request, response: Response) {
    const listUserReceiverComplimentsService = new ListUserReceiverComplimentsService();
    const { user_id } = request;

    const compliments = await listUserReceiverComplimentsService.execute(user_id);

    return response.status(200).json({
      status: "ok",
      data: compliments
    });
  }
}

export { ListUserReceiverComplimentsController };