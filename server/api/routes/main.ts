import {Router} from "express";

export default (router: Router) => {
  router.get('/test', (req, res) => {
    res.send('Hi');
  });
}