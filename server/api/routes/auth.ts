import {Router} from 'express';
import Auth from '../controllers/auth';

export default (router: Router) => {
  const auth = new Auth();

  router.get('/register', auth.register);

  router.get('/login', auth.login);
}