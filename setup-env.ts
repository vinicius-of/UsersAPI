import SetupEnv from "./interfaces/configurations/setup-env";

const CONFIG: SetupEnv = {
    SERVER_PORT: process.env['SERVER_PORT'] ?? 3000,
    APP_NAME: 'Users'
}

export default CONFIG;