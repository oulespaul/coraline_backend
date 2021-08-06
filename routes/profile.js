import express from "express";
import multer from "multer";
import path from "path";

const router = express.Router();

import * as profileController from "../controllers/profile.controller";

import { verifyToken } from "../middleware/auth.middleware";

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

router.get("/", verifyToken, profileController.getProfile);

router.get("/:id", profileController.getProfilePublish);

router.post("/", verifyToken, profileController.createProfile);

router.post(
  "/uploadImage",
  [upload.single("file"), verifyToken],
  profileController.uploadProfileImage
);

router.patch("/:id", profileController.updateProfile);

export default router;
