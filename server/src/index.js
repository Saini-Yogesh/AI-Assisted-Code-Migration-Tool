import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import migrationRoutes from "./routes/migration.routes.js";

dotenv.config();

const app = express();

/* Middleware */
app.use(cors());
app.use(express.json({ limit: "1mb" }));

/* Routes */
app.get("/", (req, res) => {
  res.json({ hello: "test123" });
});
app.use("/api/migrate", migrationRoutes);

const PORT = process.env.PORT || 5000;

/* Start server */
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

startServer();