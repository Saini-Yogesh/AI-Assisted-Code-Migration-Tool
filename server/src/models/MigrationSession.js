import mongoose from "mongoose";

const migrationSessionSchema = new mongoose.Schema(
    {
        originalCode: {
            type: String,
            required: true,
        },
        migratedCode: {
            type: String,
            required: true,
        },
        target: {
            type: String,
            enum: ["ES6", "TypeScript"],
            required: true,
        },
    },
    { timestamps: true }
);

export default mongoose.model("MigrationSession", migrationSessionSchema);
