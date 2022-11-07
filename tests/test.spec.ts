import { describe, expect, it} from "@jest/globals";
import { closeMockServer, createMockServer } from "./mockServer";
import request from 'supertest';
import TEST_ENV_VARS from "./setup-test-env";

describe("Inital test", () => {
    it("should test if Jest is working", () => {
        expect(true);
    });

    test.todo("it should create a Express mock server");

    test.todo("it should close the Express mock server");
});