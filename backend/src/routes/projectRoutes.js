import express from "express";
import {
  createProject,
  getProjectById,
  getProjects,
  requestToJoinProject,
  getJoinRequests
} from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createProject);
router.get("/", protect, getProjects)
router.get("/:id", protect, getProjectById);
router.post("/:id/join", protect, requestToJoinProject);
router.get("/:id/requests", protect, getJoinRequests);

export default router;
