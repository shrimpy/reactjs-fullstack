import express from "express";
import passport from "passport";
import { Strategy } from "passport-facebook";

passport.use(new Strategy({
    clientID: "AUTH_FACEBOOK_CLIENT_ID",
    clientSecret: "AUTH_FACEBOOK_CLIENT_SECRET",
    callbackURL: "AUTH_FACEBOOK_CLIENT_CALLBACK",
    profileFields: ['email', 'displayName']
},
    async (accessToken, _refreshToken, profile, cb) => {
        // const { email, name } = profile._json;
        // let user = await UserDao.read(email);
        // if (user) {
        //     await UserDao.update(email, name, accessToken);
        //     user.displayName = name;
        //     user.token = accessToken;
        // } else {
        //     user = await UserDao.create(email, name, accessToken, "facebook");
        // }
        // cb(null, user);
    }
));

export const FacebookApi = express.Router();
FacebookApi.get("/login", passport.authenticate("facebook", { scope: ["email"] }))
FacebookApi.get(
    "/callback",
    passport.authenticate('facebook', { scope: ["email"], failureRedirect: '/login-failed' }),
    (_, res) => res.redirect('/')
);