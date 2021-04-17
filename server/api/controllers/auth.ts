import {Request, Response} from 'express';
import GoogleAuth from "../../services/GoogleAuth";
import config from "../../config";
import getToken from "../middlewares/googleToken";
import fetch from "node-fetch";

export default class Auth {
  register(req: Request, res: Response) {
    res.send('register');
  }

  login(req: Request, res: Response) {
    res.send('login');
  }

  getGoogleUrl(req: Request, res: Response) {
    const googleAuth = new GoogleAuth({
      redirectUri: `${config.SERVER_ROOT_URI}${config.API.GOOGLE_REDIRECT}`,
      clientId: config.GOOGLE.GOOGLE_CLIENT_ID,
    });
    return res.send(googleAuth.getGoogleAuthUrl());
  }

  async redirectGoogle(req: Request, res: Response) {
    const code = req.query.code as string;
    const {access_token, id_token} = await getToken({
      code,
      clientId: config.GOOGLE.GOOGLE_CLIENT_ID,
      clientSecret: config.GOOGLE.GOOGLE_CLIENT_SECRET,
      redirectUri: `${config.SERVER_ROOT_URI}${config.API.GOOGLE_REDIRECT}`,
    });
    const googleUser = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`, {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      })
      .then(res => res.json())
      .catch((error) => {
        throw new Error(error.message);
      });
    console.log(googleUser);
    res.cookie('google_user', googleUser, {
      maxAge: 900000,
      httpOnly: true,
      secure: false,
    })
    return res.redirect(`${config.SERVER_ROOT_URI}/`);
  }

  getGoogleUser(req: Request, res: Response) {
    return res.send(req.cookies['google_user']);
  }
}