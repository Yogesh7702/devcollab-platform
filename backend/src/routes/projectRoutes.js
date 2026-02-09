import express from "express";
import {
  createProject,
  getProjectById,
  getProjects
} from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", protect, getProjects)


router.get("/:id", protect, getProjectById);

export default router;
