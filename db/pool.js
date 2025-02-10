import pkg from 'pg';
const {Pool} = pkg;
export default new Pool({
    host:"localhost",
    user: "ahmed",
    database: "top_users",
    password: "8876682",
    port: 5432
}) 