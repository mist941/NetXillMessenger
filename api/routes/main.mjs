export default (router) => {
  router.get('/test', (req, res) => {
    res.send('Hi');
  });
}