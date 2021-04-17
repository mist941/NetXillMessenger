import {GoogleAuthParams, GoogleToken, GoogleUser} from "../types/google";
import * as querystring from "querystring";
import fetch from "node-fetch";

export default class GoogleAuth {
  private readonly redirectUri: string;
  private readonly clientId: string;
  private readonly clientSecret: string;

  constructor(params: GoogleAuthParams) {
    this.redirectUri = params.redirectUri;
    this.clientId = params.clientId;
    this.clientSecret = params.clientSecret;
  }

  getGoogleAuthUrl(): string {
    const options = {
      redirect_uri: this.redirectUri,
      client_id: this.clientId,
      access_type: "offline",
      response_type: "code",
      prompt: "consent",
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
      ].join(" "),
    };
    return `https://accounts.google.com/o/oauth2/v2/auth?${querystring.stringify(options)}`
  }

  getToken(code: string, url: string): Promise<GoogleToken> {
    const values = {
      code,
      client_id: this.clientId,
      client_secret: this.clientSecret,
      redirect_uri: this.redirectUri,
      grant_type: "authorization_code",
    };

    return fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: querystring.stringify(values),
    })
      .then(res => res.json())
      .catch(error => {
        throw new Error(error.message);
      });
  }

  getUser(accessToken: string, idToken: string): Promise<GoogleUser> {
    return fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`, {
        headers: {
          Authorization: `Bearer ${idToken}`,
        },
      })
      .then(res => res.json())
      .catch(error => {
        throw new Error(error.message);
      });
  }
}