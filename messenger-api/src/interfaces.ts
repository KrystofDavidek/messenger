import { Request } from "express";

export interface ConversationReq extends Request {
  [id: string]: any;
}
