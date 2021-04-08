import {Router} from "express";

const router = Router();

export default (app)=>{
  app.use('/', router);
  router.get('/test', (req, res) => {
    res.send('Hi');
  });
}