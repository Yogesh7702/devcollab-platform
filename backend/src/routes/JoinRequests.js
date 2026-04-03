import express from "express";
import multer from "multer";
import {
  requestToJoinProject,
  getJoinRequests,
  handleJoinRequest
} from "../controllers/Join-system.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();
const upload = multer({
  dest: "uploads/",
})

router.post("/:id/join", protect, upload.single("resume"), requestToJoinProject);
router.get("/:id/requests", protect, getJoinRequests);
router.patch("/requests/:requestId", protect, handleJoinRequest);

export default router;