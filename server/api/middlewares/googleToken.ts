import {GoogleTokenParams, GoogleTokenPromise} from "../../types/google";
import * as querystring from "querystring";
import fetch from "node-fetch";

export default function getToken(params: GoogleTokenParams): Promise<GoogleTokenPromise> {
  const {code, clientId, clientSecret, redirectUri} = params;
  const url = "https://oauth2.googleapis.com/token";

  const values = {
    code,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri,
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