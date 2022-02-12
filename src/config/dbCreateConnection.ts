import { Connection, createConnection } from 'typeorm';
import { config } from './ormConfig';
import { ConnectionOptions } from 'typeorm/connection/ConnectionOptions';


export const dbCreateConnection = async() => {
    try {
        const conn: Connection = await createConnection(config as ConnectionOptions);
        console.log(`Database connection success. Connection name: '${conn.name}' Database: '${conn.options.database}'`);
    } catch (err) {
        console.log(err);
    }
    return null;
};
