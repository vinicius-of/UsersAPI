import express, { Express } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import ENV from './setup-env';
import SetupEnv from './interfaces/configurations/setup-env';
import setMiddlewares from './middlewares';

let users = [
  {
    id: 132165,
    nome: "Lucas",
    empresa: "Keller Williams",
    permissao: "ADMIN",
  },
  {
    id: 14564,
    nome: "Aline",
    empresa: "Keller Williams",
    permissao: "USER",
  },
  {
    id: 22314,
    nome: "Bruno",
    empresa: "Keller Williams",
    permissao: "USER",
  },
];

dotenv.config();
const app = createExpressApp();
openServer(app, ENV);

function createExpressApp () {
  const app = express();
  setMiddlewares(app);
  return app;
}

function openServer(expressApp: Express, config: SetupEnv) {
  http.createServer(expressApp).listen(config.SERVER_PORT, undefined, () => {
    console.log('Listening to port ' + config.SERVER_PORT);
  });
}