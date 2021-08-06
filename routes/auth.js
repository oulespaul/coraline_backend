import express from "express";
import { checkDuplicateUsername } from "../middleware/verify-signup.middleware";

const router = express.Router();

import * as authController from "../controllers/auth.controller";

router.post("/signup", checkDuplicateUsername, authController.signup);

router.post("/signin", authController.signin);

export default router;
