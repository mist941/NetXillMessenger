export interface GoogleAuthParams {
  redirectUri: string,
  clientId: string,
  clientSecret: string,
}

export interface GoogleToken {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  id_token: string;
}

export interface GoogleUser {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
}