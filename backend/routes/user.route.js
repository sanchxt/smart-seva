import express from "express";

import {
  deleteUser,
  test,
  updateUser,
  upload,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.post("/update/:id", verifyToken, updateUser);
router.post("/upload/:id", verifyToken, upload);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
