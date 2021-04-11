import {Router} from "express";
import main from "./routes/main";
import auth from "./routes/auth";

export default () => {
  const router = Router();
  main(router);
  auth(router);

  return router;
}