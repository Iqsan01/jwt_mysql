import { Sequelize } from "sequelize";

const db = new Sequelize('authjwt_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;