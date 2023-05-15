import express from "express";
import { ensureAuthenticated } from "./auth";

const router = express.Router();
export default router;

router.get("/ping", (req, res) => {
  res.send("pong");
});

router.get(
  "/auth-ping",
  ensureAuthenticated,
  (req, res) => {
    res.status(200).send("secret pong");
  },
);
