import express from "express";
import { getProfileDashboard } from "../controllers/ProfileController.js";

const router = express.Router();

router.get("/:id/dashboard", getProfileDashboard);

export default router;