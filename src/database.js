import {createPool} from 'mysql2/promise';

const pool = createPool({
    host: 'localhost',
    port: '3306',
    user: 'josearocha050',
    password: 'arteway21',
    database: 'node_crud'
});

export default pool;