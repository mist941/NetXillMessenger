export default (router) => {
  router.get('/login', (req, res) => {
    res.send('login');
  });

  router.get('/register', (req, res) => {
    res.send('register');
  });
}