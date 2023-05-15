import * as path from "path";
import express from "express";
import api from "./routes";

const app = express();
export default app;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", api);
app.use("/", express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));