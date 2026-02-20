import express from "express";
import {
  createAppointment,
  getAppointments,
  updateStatus
} from "../controllers/appointmentController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, roleMiddleware("patient"), createAppointment);
router.get("/", authMiddleware, getAppointments);
router.put("/:id", authMiddleware, roleMiddleware("doctor"), updateStatus);

export default router;
