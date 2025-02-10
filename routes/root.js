import express from 'express';
import { getUserNames } from '../controllers/root.js';

const router = express.Router();

router.get('/',getUserNames)

export default router;