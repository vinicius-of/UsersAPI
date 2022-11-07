import User from "../interfaces/models/User";
import Repository from "../interfaces/repository/Repository";

type DocumentToUpdateUser = Partial<Omit<User, 'id'>>;

export default class UserRepository implements Repository<User> {

    private dataset: Record<string, User> = {};

    getAll(): User[] {
        return Object.values(this.dataset).filter((user => {
            const { empresa, id, nome, permissao } = user;
            const userWithoutDeletedProperty: User = {empresa, id, nome, permissao};
            return   userWithoutDeletedProperty;
        }));
    };

    find(where: Partial<User>): User | undefined {
        if (where?.id && this.dataset[where.id]) {
            return this.dataset[where.id] ? this.dataset[where.id] : undefined;
        }

        const listOfUsers = Object.values(this.dataset);  
        const filteredUser = listOfUsers.find((user) => {
            const {nome, empresa, permissao} = user;
            const userWithoutId = { nome, empresa, permissao };

            return JSON.stringify(where) === JSON.stringify(userWithoutId);
        });

        return filteredUser;
    };

    insert(document: User): User {

        let newDocument = {...document};

        if (newDocument?.id) {
            newDocument = {
                ...document,
                id: Object.keys(this.dataset).length + 1,
            };
        }

        this.dataset[newDocument.id] = { ...newDocument };
        return this.dataset[newDocument.id];
    };

    delete(where: Partial<User>): User{
        const userToDelete = this.find(where);

        if (!userToDelete) {
            throw new Error("UserRepositoryError: This user does not exist to be deleted.");
        }

        delete this.dataset[userToDelete.id];

        return userToDelete;
    };

    update(where: Partial<User>, document: DocumentToUpdateUser ): User {
        const user = this.find(where);

        if (!user) {
            throw new Error("UserRepositoryError: This user does not exist and could not been updated. Please create the user that you desire to update.");
        }

        const updatedUser = {...user, ...document};
        this.dataset[updatedUser.id] = {...updatedUser};

        return this.dataset[updatedUser.id];
    };

    setDataset(list: User[]): UserRepository {

        const newMockDatabase: Record<number, User> = {};

        for (const item of list) {
            newMockDatabase[item.id] = {...item };
        }

        this.dataset = newMockDatabase;
        return this;
    };
}



