export const config = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    synchronize: true,
    entities: [
        'src/entity/*.js'
    ],
    subscribers: [
        'src/subscriber/*.js'
    ],
    migrations: [
        'src/migration/*.js'
    ],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber'
    }
};

module.exports = config;
