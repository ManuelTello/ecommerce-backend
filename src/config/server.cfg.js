import dotenv from "dotenv";
import minimist from "minimist";

const argv = minimist(process.argv.slice(2));
dotenv.config({
    path:"./.env",
});

export const  database  = argv.db;

export default {
    port : process.env.PORT || 8080,
};