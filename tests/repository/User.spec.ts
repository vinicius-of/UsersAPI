import User from "../../interfaces/models/User";
import UserRepository from "../../repository/User";

describe("User Repository Test", () => {

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
    ];

    const userRepository = new UserRepository();

    beforeEach(() => {
        userRepository.setDataset(listOfMockUsers);
    })

    it("should set a mock database into the UserRespository", () => {
        expect(userRepository).not.toBeNull();
    });

    it("should get all users from UserRepository", () => {
        const expectedUsers = userRepository.getAll();

        expect(expectedUsers).toHaveLength(3);
    });

    it("should find the user by id property", () => {
        const expectedUser = userRepository.find({
            id: 132165
        });

        expect(expectedUser).toMatchObject(
            {
                id: 132165,
                nome: "Lucas",
                empresa: "Keller Williams",
                permissao: "ADMIN",
            },
        );
    });

    it("should not find the user by wrong id value", () => {
        const expectedUser = userRepository.find({
            id: 404
        });

        expect(expectedUser).toBeUndefined();
    });

    it("should find the user without the id", () => {
        const expectedUser = userRepository.find({
            nome: "Aline",
            empresa: "Keller Williams",
            permissao: "USER",
        });

        expect(expectedUser).toMatchObject({
            id: 14564,
            nome: "Aline",
            empresa: "Keller Williams",
            permissao: "USER",
        });
    });

    it("should not find the user by wrong name", () => {
        const expectedUndefinedUser = userRepository.find({
            nome: "Bruno 123",
            empresa: "Keller Williams",
            permissao: "USER",
        });

        expect(expectedUndefinedUser).toBeUndefined();
    });

    it("should insert the new user into mock database", () => {
        const newUser: User = { id: 10142, nome: 'Vinicius', empresa: "Keller Williams", permissao: 'USER' };
        const userInserted = userRepository.insert(newUser);

        expect(userInserted).toBeDefined();
        expect(userInserted.id).toBe(newUser.id);
        expect(userInserted.nome).toMatch(newUser.nome);
    });

    it("should delete the user from mock database", () => {
        userRepository.delete({ id: 14564 });
        const userDeleted = userRepository.find({ id: 14564 });

        expect(userDeleted).toBeUndefined();
    });

    it("should update the data of the selected user", () => {
        const expected = {
            nome: "Carl",
            empresa: "Another Company",
        };

        userRepository.update({ id: 14564 }, { ...expected });
        const userUpdated = userRepository.find({ id: 14564 });

        expect(userUpdated).toBeDefined();
        expect(userUpdated?.nome).toBe(expected.nome);
        expect(userUpdated?.empresa).toBe(expected.empresa);
    });
})