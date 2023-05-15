import express from "express";
import passport from "passport";
import passportCustom from "passport-custom";
const CustomStrategy = passportCustom.Strategy;

passport.use(
  "adhoc",
  new CustomStrategy(
    async (req, callback) => {
      const email = req.body["email"];
      const secret = req.body["secret"];
      // replace if statement with code that look up and verify logic secret
      if (email === "good@email.com" && secret === "top secret") {
        callback(null, { user: "foo" });
      } else {
        callback(null);
      }
    },
  ),
);

export const AdhocApi = express.Router();

AdhocApi.post("/login", async (req, res) => {
  const email = req.body["email"];
  if (email === "good@email.com") {
    // send login secret to email
  }

  res.status(200).send();
});
