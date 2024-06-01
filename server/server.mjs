import express, { json } from "express";
import cors from "cors";
import { server_port } from "./config/env_vars.mjs";
import router from "./routes/routes.mjs";
import {
  DB_SyncDatabase,
  DB_TestConnection,
} from "./controllers/database_operations.mjs";

const app = express();
const port = server_port;
app.use(cors());

app.use(json());
app.use("/", router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("[error] Internal Server Error");
});

app.listen(port, () => {
  DB_TestConnection();
  console.log(`[server] Currently running on http://localhost:${port}`);
});
