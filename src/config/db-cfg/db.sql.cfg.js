import dotenv from "dotenv";

dotenv.config({
    path : "./.env"
});

export default {
    dbName : process.env.DB_NAME,
    user : process.env.DB_USER,
    pass : process.env.DB_PASS,
};