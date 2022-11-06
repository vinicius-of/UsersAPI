import SetupEnv from "./interfaces/configurations/setup-env";

const ENV: SetupEnv = {
    SERVER_PORT: process.env['SERVER_PORT'] ?? 3000,
    APP_NAME: process.env['APP_NAME'] ?? 'Express Server'
}

export default ENV;