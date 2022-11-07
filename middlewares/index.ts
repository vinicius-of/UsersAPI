import express, { Express } from 'express';
import router from '../controllers';
const cors = require('cors');

export default function setMiddlewares(expressApp: Express) {
    expressApp.use(express.json());
    expressApp.use(express.urlencoded({
        extended: true,
    }));
    expressApp.use(router);
    expressApp.use(cors());
}