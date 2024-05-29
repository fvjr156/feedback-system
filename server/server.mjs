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

app.get("/survey", function (req, res) {
  const url =
    "https://forms.office.com/Pages/ResponsePage.aspx?id=Q97QyABtNEWjxl_CIYWrmwHypepq4k1ElL_6lzc9HCZUMkdMWDRQSkRCTjMxSDFRNVpXVUs4SlpSTS4u";
  res.redirect(url);
});

app.listen(port, () => {
  DB_TestConnection();
  console.log(`[server] Currently running on http://localhost:${port}`);
});
