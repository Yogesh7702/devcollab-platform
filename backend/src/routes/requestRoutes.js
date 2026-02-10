import express from "express";
import { handleJoinRequest } from "../controllers/requestController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.patch("/:requestId", protect, handleJoinRequest);

export default router;