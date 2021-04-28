import {Request, Response} from "express";
import AuthService from "../../services/AuthService";
import {Container} from "typedi";

export default class AuthController {
  async register(req: Request, res: Response) {
    const authService = Container.get(AuthService);
    const {user, token} = await authService.register(req.body);
    return res.status(200).json({user, token});
  }

  async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const authService = Container.get(AuthService);
    const {user, token} = await authService.signIn(email, password);
    return res.status(200).json({user, token});
  }
}
