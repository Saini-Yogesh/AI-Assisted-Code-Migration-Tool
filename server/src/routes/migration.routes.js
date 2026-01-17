import express from "express";
import {
  migrateCode,
  getAllSessions,
  deleteSession,
} from "../controllers/migration.controller.js";

const router = express.Router();

router.post("/", migrateCode);
router.get("/sessions", getAllSessions);
router.delete("/sessions/:id", deleteSession);

export default router;
