import express, { Express } from 'express';
import dotenv from 'dotenv';
import http from 'http';
import CONFIG from './setup-env';
import SetupEnv from './interfaces/configurations/setup-env';
const cors = require("cors");

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

initialize();

function initialize () {
  dotenv.config();
  const app = createExpressApp();

  app.get('/', (req: any, res: any) => {
    res.send('test');
  });

  openServer(app, CONFIG);
}

function createExpressApp () {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true,
  }));
  app.use(cors());

  return app;
}

function openServer(expressApp: Express, config: SetupEnv) {
  http.createServer(expressApp).listen(config.SERVER_PORT, undefined, () => {
    console.log('Listening to port ' + config.SERVER_PORT);
  });
}