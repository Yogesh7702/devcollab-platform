import express from "express";
import { handleJoinRequest } from "../controllers/projectController.js";
import protect  from "../middleware/authMiddleware.js";

const router = express.Router();

router.patch("/:requestId", protect, handleJoinRequest);

export default router;
