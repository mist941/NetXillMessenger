import {Router} from "express";
import GoogleAuthController from "../controllers/GoogleAuthController";

export default (router: Router) => {
  const googleAuthController = new GoogleAuthController();

  router.get('/auth/google/url', googleAuthController.getGoogleUrl);
  router.get('/auth/google/redirect', googleAuthController.redirectGoogle);
  router.get('/auth/google/userdata', googleAuthController.getGoogleUser);
}
