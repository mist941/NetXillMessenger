import {Router} from 'express';
import AuthController from '../controllers/AuthController';

export default (router: Router) => {
  const authController = new AuthController();

  router.get('/register', authController.register);
  router.get('/login', authController.login);
}