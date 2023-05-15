import * as path from "path";
import express from "express";
import rateLimit from "express-rate-limit";
import api from "./routes";

const app = express();
export default app;

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
app.set('trust proxy', 1);

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minutes
    max: 10 // limit each IP to 10 requests per windowMs
});

//  apply to all requests
// app.use(limiter);
//  apply to api requests
app.use("/api/", limiter);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", api);
app.use("/", express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));