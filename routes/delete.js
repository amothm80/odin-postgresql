import express from "express";
import { deleteUsernamePost } from "../controllers/delete.js";
const router = express.Router();
// router.set('view engine', 'ejs');


router.post("/", deleteUsernamePost);

export default router;
