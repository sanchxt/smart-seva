import express from "express";

import {
  deleteUser,
  getPrescription,
  test,
  updateUser,
  upload,
} from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/", test);
router.get("/prescription/:id", verifyToken, getPrescription);
router.post("/upload/:id", verifyToken, upload);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);

export default router;
