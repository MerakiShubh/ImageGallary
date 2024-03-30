import { Router } from "express";
import { upload } from "../middleware/multer.middleware.js";
import { uploadFile } from "../ controllers/file.controller.js";
const router = Router();

router.route("/upload").post(
  upload.fields([
    {
      name: "photo",
      maxCount: 1,
    },
  ]),
  uploadFile
);

export default router;
