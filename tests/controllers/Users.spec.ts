import { createMockServer } from "../mockServer";
import request, { SuperTest, Test } from 'supertest';
import User from "../../interfaces/models/User";

describe("User Controller", () => {

    let app = {};

    const listOfMockUsers: User[] = [
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
        {
            id: 1,
            nome: "admin",
            empresa: "Keller Williams",
            permissao: "ADMIN",  
        },
    ];

    const admin = listOfMockUsers.find((user) => user.permissao === 'ADMIN');
    const id = admin?.id ? admin.id : 1;

    beforeEach(async () => {
        app = await createMockServer();
    });

    it("should get all users", async () => {
        const response = await request(app).get('/users').set('Accept', 'application/json').query({ calledId: id });

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toHaveLength(4);
    });
    
    it("should create the user by an admin", async () => {

        const payload = {
            nome: 'Jonh',
            empresa: "Another company",
            permissao: 'USER'
        };

        const response = await request(app).post('/users').set('Accept', 'application/json').query({ calledId: id }).send(payload);

        expect(response.statusCode).toBe(201);
        expect(response.body.data).toMatchObject(payload);
    });

    it("should update the user by an admin", async () => {
        const payload = {
            id: 14564,
            nome: 'Jonh',
            empresa: "Another company",
            permissao: 'USER'
        };

        const response = await request(app).patch(`/users/${payload.id}`).set('Accept', 'application/json').query({ calledId: id }).send(payload);
        
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject(payload);
    });

    it("should delete the user by an admin", async () => {

        const userTobeDeleted = {
            id: 22314,
            nome: "Bruno",
            empresa: "Keller Williams",
            permissao: "USER",
          };

        const response = await request(app).delete(`/users/${userTobeDeleted.id}`).set('Accept', 'application/json').query({ calledId: id });

        expect(response.statusCode).toBe(200);
        expect(response.body.data).toMatchObject(userTobeDeleted);
    });

    it("should not delete the user", async () => {
        const userTobeDeleted = {
            id: 14564,
            nome: "Aline",
            empresa: "Keller Williams",
            permissao: "USER",
        };

        const userWithoutPermission = {
            id: 22314,
            nome: "Bruno",
            empresa: "Keller Williams",
            permissao: "USER",
        };

        const response = await request(app).delete(`/users/${userTobeDeleted.id}`).set('Accept', 'application/json').query({ calledId: userWithoutPermission.id });

        expect(response.statusCode).toBe(401);
    });
});