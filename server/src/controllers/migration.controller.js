import MigrationSession from "../models/MigrationSession.js";
import { migrateCodeWithAI } from "../services/ai.service.js";

export const migrateCode = async (req, res) => {
    try {
        const { code, target } = req.body;

        if (typeof code !== "string" || !code.trim()) {
            return res.status(400).json({ message: "Code is required" });
        }

        if (typeof target !== "string" || !target.trim()) {
            return res.status(400).json({ message: "Target is required" });
        }

        const migratedCode = await migrateCodeWithAI(code, target);

        const session = await MigrationSession.create({
            originalCode: code,
            migratedCode,
            target
        });

        return res.status(200).json({
            sessionId: session._id,
            migratedCode
        });
    } catch (err) {
        console.error("Migration error:", err);

        return res.status(500).json({
            message: err.message || "Migration failed"
        });
    }
};

export const getAllSessions = async (req, res) => {
    try {
        const sessions = await MigrationSession.find()
            .sort({ createdAt: -1 })
            .limit(20)
            .lean();

        return res.status(200).json(sessions);
    } catch (err) {
        console.error("Fetch sessions error:", err);

        return res.status(500).json({
            message: "Failed to fetch migration sessions"
        });
    }
};

export const deleteSession = async (req, res) => {
    try {
        const { id } = req.params;
        await MigrationSession.findByIdAndDelete(id);
        res.json({ message: "Session deleted" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed" });
    }
};
