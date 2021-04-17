import {GoogleAuthParams} from "../types/google";
import * as querystring from "querystring";

export default class GoogleAuth {
  private readonly redirectUri: string;
  private readonly clientId: string;

  constructor(params: GoogleAuthParams) {
    this.redirectUri = params.redirectUri;
    this.clientId = params.clientId;
  }

  getGoogleAuthUrl() {
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
}