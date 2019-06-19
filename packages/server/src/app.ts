import * as path from "path";
import express from "express";
import * as bodyParser from "body-parser";
import api from "./routes";

const app = express();
export default app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", api);
app.use("*", express.static(path.join(__dirname, "public")));
