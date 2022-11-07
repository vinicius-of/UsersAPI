import Authorization from "../authorization";

interface User {
    id: number;
    nome: string
    empresa: string
    permissao: Authorization;
}

export default User;