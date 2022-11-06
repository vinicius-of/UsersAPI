import express, { Express } from 'express';
const cors = require('cors');

export default function setMiddlewares(expressApp: Express) {
    expressApp.use(express.json());
    expressApp.use(express.urlencoded({
        extended: true,
    }));

    expressApp.use(cors());
}