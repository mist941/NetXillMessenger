import {Router} from "express";
import auth from "./routes/auth";
import googleAuth from "./routes/googleAuth";

export default () => {
  const router = Router();
  auth(router);
  googleAuth(router);

  return router;
}