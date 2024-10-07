import { Sequelize } from "sequelize";
import pg from "pg";
import "dotenv/config";

const sequelize = new Sequelize(process.env.CONNECTION_URI as string, {
  dialect: "postgres",
  dialectModule: pg,
  logging: false,
});

export default sequelize;
