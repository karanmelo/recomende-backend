import { Request, Response } from "express";
import { ListUserSenderComplimentsService } from "../services/ListUserSenderComplimentsService";

class ListUserSenderComplimentsController {
  async handle(request: Request, response: Response) {
    const listUserSendComplimentsService = new ListUserSenderComplimentsService();
    const { user_id } = request;

    const compliments = await listUserSendComplimentsService.execute(user_id);

    return response.status(200).json({
      status: "ok",
      data: compliments
    });
  }
}

export { ListUserSenderComplimentsController };