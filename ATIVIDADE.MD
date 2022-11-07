1.  ```js
    // DEFINA UM MIDDLEWARE QUE VERIFIQUE SE O USUÁRIO QUE ESTÁ ENVIANDO O REQUEST TEM A PERMISSÃO DE ADMINISTRADOR
    function isAdmin(req: any, res: any, next: any) {
      let { callerId } = req.params;
      // TODO
    }

    // ROTAS EXECUTANDO FUNÇÕES CRUD NA ARRAY DE USUÁRIOS, ONDE SOMENTE O ADMINISTRADOR PODE CRIAR OU DELETAR UM USUÁRIO.

    // ENVIE A ID DE QUEM ESTÁ ENVIANDO O REQUEST COMO PARÂMETRO NA URL " calledId "
    // CRIE AS SEGUINTES ROTAS.

    //TODO
    // GET /users
    // POST /users
    // PATCH /users/:id
    // DELETE /users/:id
    ```

    1. Criar um CRUD para o modelo Users.
    2. Criar middleware que verifique o nível de autorização do usuário que está se conectando a API.
    3. Adicionar o campo calledId aos parametros da requisição.
