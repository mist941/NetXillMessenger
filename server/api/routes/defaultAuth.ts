import {Router} from "express";
import AuthController from "../controllers/AuthController";
import {celebrate, Joi} from "celebrate";

export default (router: Router) => {
  const authController = new AuthController();

  router.post('/register', celebrate({
    body: Joi.object({
      userName: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), authController.register);

  router.post('/login', celebrate({
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }), authController.login);
}
