import {Request, Response} from "express";
import AuthService from "../../services/AuthService";
import User from "../../models/User";

export default class AuthController {
  async register(req: Request, res: Response) {
    const authService = new AuthService(User);
    const {user, token} = await authService.register(req.body);
    return res.status(200).json({user, token});
  }

  async login(req: Request, res: Response) {
    const {email, password} = req.body;
    const authService = new AuthService(User);
    const {user, token} = await authService.signIn(email, password);
    return res.status(200).json({user, token});
  }
}
