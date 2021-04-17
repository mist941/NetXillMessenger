export default {
  PORT: process.env.PORT || 3000,
  API: {
    PREFIX: '/api',
    GOOGLE_REDIRECT: 'api/auth/google/redirect/',
  },
  DATABASE_URL: 'mongodb+srv://ivan_dev:rFPXg6f8HVS0rNce@netxildb.f7dhr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  GOOGLE: {
    GOOGLE_CLIENT_ID: '15920841265-21h9i95u2gqfp4h3lqs5o2spmijqrluh.apps.googleusercontent.com',
    GOOGLE_CLIENT_SECRET: '8rnedKZqxX_O3iigb9tqfGu2'
  },
  SERVER_ROOT_URI: process.env.production ? 'https://netxillmessenger.herokuapp.com/' : 'http://localhost:3000/',
  CLIENT_ROOT_URI: process.env.production ? 'https://netxillmessenger.herokuapp.com/' : 'http://localhost:8080/',
  CLIENT_PATH: process.env.production ? 'build/index.html' : 'client/index.html',
  JWT_SECRET: 'eyJhbGciOiJIUzI1NiJ9.eyJDcmVhdGVkQXQiOiIyMDIxLTA0LTE3VDE1OjAzOjIzLjA4NloiLCJEZWxldGVkQXQiOiIyMDIxLTA0LTE3VDE1OjAzOjIzLjA4NloifQ.AeAQBs-0uuKtBO8Q70-9EGj12TYga2l1C2cMnK49jlM',
};