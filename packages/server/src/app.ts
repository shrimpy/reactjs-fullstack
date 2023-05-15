import * as path from "path";
import express from "express";
import passport from "passport";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import cookieSession from "cookie-session";
import expressSession from "express-session";
import api from "./routes";

const app = express();
export default app;

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

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

app.use(cookieSession({
    keys: ["YOUR COOKIE SESSION KEY HERE"],
    maxAge: 1000 * 60 * 60 * 24 * 30,
    secure: false, //!(app.get("env") === "development")
}));

app.use(expressSession({
    secret: 'YOUR EXPRESS SESSION KEY HERE',
    resave: false,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user: any, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user as any));

app.use("/api", api);
app.use("/", express.static(path.join(__dirname, "public")));
console.log(path.join(__dirname, "public"));