import {Router} from 'express';
import Auth from '../controllers/auth';

export default (router: Router) => {
  const auth = new Auth();

  router.get('/register', auth.register);
  router.get('/login', auth.login);
  router.get('/auth/google/url', auth.getGoogleUrl);
  router.get('/auth/google/redirect', auth.redirectGoogle);
  router.get('/auth/google/userdata', auth.getGoogleUser);
}