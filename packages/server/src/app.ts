import * as path from "path";
import express from "express";
import * as bodyParser from "body-parser";

const app = express();
export default app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/ping", function (_, res) {
    res.send("pong");
});

app.use("*", express.static(path.join(__dirname, "public")));

console.log(__dirname);