import {Request, Response} from "express";

export default class AuthController {
  register(req: Request, res: Response) {
    res.send('register');
  }

  login(req: Request, res: Response) {
    res.send('login');
  }
}