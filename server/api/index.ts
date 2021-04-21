import {Router} from "express";
import defaultAuth from "./routes/defaultAuth";
import googleAuth from "./routes/googleAuth";

export default () => {
  const router = Router();
  defaultAuth(router);
  googleAuth(router);

  return router;
}