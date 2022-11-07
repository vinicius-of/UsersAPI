# Projeto de Teste Técnico

Meu nome é Vinícius de Oliveira Fonseca e este é meu teste técnico para a empresa Keller Williams.

## Meus pensamentos

Neste desafio, eu me esforcei ao máximo e usei de meus conhecimentos para aplicar as melhores e mais atualizadas tecnologias e ferramentas para melhorar a eficiência e experiência do desenvolvedor neste projeto. Primeiramente tentei o deixar o mais flexível e escalável possível. Usando de Jest, TypeScript e TDD (Test-Driven Development), eu segui os ideais para permitir que a aplicação não quebrasse enquanto eu expandia o projeto, permitindo rápido crescimento e desenvolvimento.

Eu dividi as rotas e imaginei esta solução aplicada no projeto para permitir que mais rotas sejam adicionadas sem grandes esforços seria dividi-las e centralizar em um único roteador que seria usado pelo aplicativo Express.

Eu tentei separar o máximo para que tudo possa ser escalável de um template para desenvolvimento até um projeto de pequeno porte ou microsserviço.

Se eu tivesse mais tempo, eu gostaria de ter criação a documentação usando a especificação OpenAPI v3 junto com o Swagger para automatizar e facilitar a documentação do projeto.

## Descrição do projeto

1. `interfaces`: Onde estão alocados todas as interfaces que serão usados abertamento pelo projeto.
2. `middlewares`: Aqui está alocado os arquivos e funções de middlewares da API, também com o facíl acoplamento e desacoplamento do mesmos.
3. `repository`: As abstrações da relação entre o modelo e o dataset. Um repositório concede uma interface que facilita a estruturalização de funções que manipulem os dados entre estas duas peças.
4. `tests`: Todas as configurações envolvendo testes junto aos próprios testes estão alocados neste diretório. Aqui encontra-se a parte mais importante para a manutenção e viabilidade do crescimento deste projeto.
5. `controllers`: As rotas são centralizadas em seu `index.ts`, onde é importadas todas os roteadores "filhas", que seram implementadas de forma simples.
6. `dist`: Este é o projeto em sau versão transpilada do TypeScript para o JavaScript.

## Git branches

1. `main`: A branch principal do repositório. Aqui encontra-se a versão mais estável e pronto para produção.
2. `basics-configs`: Este foi a primeira branch criada com o objetivo de estabelecer as primeiras configurações e pacotes necessárias para a evolução do projeto.
3. `initial-project`: Este é a branch que serviu como versão base caso algo avançasse de forma indesejável.
4. `ts-project-base`: Este é uma branch parecida com a `initial-project`, mas agora configurada com umas das tecnologias importantes para o desenvolvimento deste sistema, o TypeScript.
5. `setting-tests`: Esta é outra branch importante
6. `task-01`

## Para executar

Abra um terminal dentro do diretório do projeto e execute os comandos abaixos para:

**Antes de tudo**

```
npm install
touch .env
nano .env (ou um editor de texto neste arquivo)
```

Adicione estas linhas.

```
SERVER_PORT=3000
APP_NAME="Users"
```

**Para desenvolver**

```
npm run dev
```

**Para testar**

```
npm run test
```

**Para construir uma versão de produção**

```
npm run build
```

**Para testar a versão de produção criada**

```
npm run serve
```
