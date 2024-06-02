import { Sequelize } from "sequelize";

export const MyDatabase = new Sequelize(
  "db_feedbacksystem",
  "user_dbadmin",
  "arcifs&himekoinaba325!",
  {
    host: "212.38.94.226",
    port: 5433,
    dialect: "mysql",
    define: {
      freezeTableName: true,
      timestamps: false,
    },
  }
);

