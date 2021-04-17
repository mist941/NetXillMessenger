export interface GoogleAuthParams {
  redirectUri: string,
  clientId: string,
}

export interface GoogleTokenParams {
  code: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
}

export interface GoogleTokenPromise {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  id_token: string;
}