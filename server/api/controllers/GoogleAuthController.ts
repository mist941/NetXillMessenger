import {Request, Response} from "express";
import GoogleAuth from "../../services/GoogleAuth";
import config from "../../config";

export default class GoogleAuthController {
  getGoogleUrl(req: Request, res: Response) {
    const googleAuth = new GoogleAuth({
      redirectUri: `${config.SERVER_ROOT_URI}${config.API.GOOGLE_REDIRECT}`,
      clientId: config.GOOGLE.GOOGLE_CLIENT_ID,
      clientSecret: '',
    });
    return res.send(googleAuth.getGoogleAuthUrl());
  }

  async redirectGoogle(req: Request, res: Response) {
    const code = req.query.code as string;
    const googleAuth = new GoogleAuth({
      redirectUri: `${config.SERVER_ROOT_URI}${config.API.GOOGLE_REDIRECT}`,
      clientId: config.GOOGLE.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE.GOOGLE_CLIENT_SECRET,
    });
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