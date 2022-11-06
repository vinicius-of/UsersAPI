import { describe, expect, it} from "@jest/globals";
import { closeMockServer, createMockServer } from "./mockServer";
import request from 'supertest';
import TEST_ENV_VARS from "./setup-test-env";

describe("Inital test", () => {
    it("should test if Jest is working", () => {
        expect(true);
    });

    it("should create a Express mock server", async () => {
        const appMock = await createMockServer();

        appMock.get('/', (req, res) => res.sendStatus(200));
        const server = appMock.listen(TEST_ENV_VARS.SERVER_PORT);

        request(appMock).get('/').expect(200);
        await server.close();

    });

    it("should close the Express mock server", async () => {
        const appMock = await createMockServer();

        appMock.get('/', (req, res) => res.sendStatus(200));
        const server = appMock.listen(TEST_ENV_VARS.SERVER_PORT);

        await closeMockServer(server);

        request(appMock).get('/').expect(404);
    })
});