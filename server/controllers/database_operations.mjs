import { MyDatabase } from "../config/mysql_database_config.mjs";

export const DB_TestConnection = async () => {
  try {
    await MyDatabase.authenticate();
    console.log("[db] Database connection established.");
  } catch (error) {
    console.error("[error] Can't connect to the database.", error);
  }
};

export const DB_SyncDatabase = async () => {
  try {
    await MyDatabase.sync({ alter: true, force: true });
    console.log("[success] Database model synced.");
  } catch (error) {
    console.error("[error] Can't sync database.", error);
  }
};

export const GET_DB_TestConnection = async (req, res) => {
  try {
    await MyDatabase.authenticate();
    res.status(200).json({ db_status: "connection_established" });
  } catch (error) {
    res.status(500).json({ db_status: "connection_error", error_msg: error });
  }
};

export const GET_DB_SyncDatabase = async () => {
  try {
    await MyDatabase.sync({ alter: true, force: false });
    res.status(200).json({ db_status: "connection_established", sync_status: "success" });
  } catch (error) {
    res.status(500).json({ db_status: "sync_error", error_msg: error });
  }
};
