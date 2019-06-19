import express from "express";

const router = express.Router();
export default router;

router.get("/ping", (req, res) => {
    res.send("pong");
});