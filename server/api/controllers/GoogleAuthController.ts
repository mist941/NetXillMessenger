import {Request, Response} from "express";
import GoogleAuthService from "../../services/GoogleAuthService";
import config from "../../config";
import {Container} from "typedi";

export default class GoogleAuthController {
  getGoogleUrl(req: Request, res: Response) {
    const googleAuth = Container.get(GoogleAuthService);
    return res.send(googleAuth.getGoogleAuthUrl());
  }

  async redirectGoogle(req: Request, res: Response) {
    const code = req.query.code as string;
    const googleAuth =  Container.get(GoogleAuthService);
    const {access_token, id_token} = await googleAuth.getToken(code, 'https://oauth2.googleapis.com/token');
    const googleUser = await googleAuth.getUser(access_token, id_token)
    res.cookie('google_user', googleUser, {
      maxAge: 900000,
      httpOnly: true,
      secure: false,
    })
    return res.redirect(`${config.SERVER_ROOT_URI}`);
  }

  getGoogleUser(req: Request, res: Response) {
    return res.send(req.cookies['google_user']);
  }
}
