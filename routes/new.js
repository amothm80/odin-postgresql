import express from "express";
import { createUsernamePost, createUsernameGet } from "../controllers/new.js";

const router = express.Router();
// router.set('view engine', 'ejs');

router.get("/", createUsernameGet);

router.post("/", createUsernamePost);

export default router;
