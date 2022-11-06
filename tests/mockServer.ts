import http from 'http';
import express, { Express } from 'express';
import setMiddlewares from '../middlewares';
import TEST_ENV_VARS from './setup-test-env'

export function createMockServer(): Promise<Express> {
    return new Promise((resolve, reject) => {
        try {
            const appMock = express();
            setMiddlewares(appMock);
            resolve(appMock);
        } catch (error) {
            reject(error);
        }
    })
}

export async function closeMockServer(appMock: http.Server): PromiseCloseServer {
    return new Promise((resolve, reject) => {
        try {
            appMock.close((err) => {
                if (err) reject(err)
                resolve('Mock Server Closed with success.');
            });
        } catch (error) {
            reject(error);
        }
    });
}

type PromiseCloseServer = Promise<string | Error>