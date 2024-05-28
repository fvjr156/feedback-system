import { Sequelize } from "sequelize";

export const MyDatabase = new Sequelize("db_feedbacksystem", "user_dbadmin", "1234", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});
