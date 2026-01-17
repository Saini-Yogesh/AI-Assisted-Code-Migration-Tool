import { useEffect, useState } from "react";
import CodeEditor from "./CodeEditor";
import DiffViewer from "./DiffViewer";
import MigrationOptions from "./MigrationOptions";
import SessionHistory from "./SessionHistory";
import ErrorBanner from "./ErrorBanner";
import { migrateCode, getSessions, deleteSession } from "../services/api";
import { downloadFile } from "../utils/exportFile";
import "../styles/Home.css";

export default function Home() {
  const [code, setCode] = useState("");
  const [migratedCode, setMigratedCode] = useState("");
  const [target, setTarget] = useState("ES6");
  const [loading, setLoading] = useState(false);
  const [sessions, setSessions] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadSessions();
  }, []);

  const loadSessions = async () => {
    try {
      const res = await getSessions();
      setSessions(res.data);
    } catch {
      setError("Failed to load history");
    }
  };

  const handleMigrate = async () => {
    if (!code.trim()) {
      setError("Please enter some code to migrate");
      return;
    }

    try {
      setError("");
      setLoading(true);
      const res = await migrateCode(code, target);
      setMigratedCode(res.data.migratedCode);
      loadSessions();
    } catch {
      setError("AI migration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectSession = (s) => {
    setError("");
    setCode(s.originalCode);
    setMigratedCode(s.migratedCode);
    setTarget(s.target);
  };

  const handleDeleteSession = async (id) => {
    try {
      await deleteSession(id);
      setSessions((prev) => prev.filter((s) => s._id !== id));
    } catch {
      setError("Failed to delete session");
    }
  };

  const handleDownload = () => {
    if (!migratedCode) return;
    const ext = target === "TypeScript" ? "ts" : "js";
    downloadFile(migratedCode, `migrated.${ext}`);
  };

  return (
    <div className="home">
      <div className="sidebar">
        <SessionHistory
          sessions={sessions}
          onSelect={handleSelectSession}
          onDelete={handleDeleteSession}
        />
      </div>

      <div className="main">
        {error && <ErrorBanner message={error} onClose={() => setError("")} />}

        <h1>AI Code Migration Tool</h1>

        <div className="editor-wrap">
          <CodeEditor value={code} onChange={setCode} language="javascript" />
        </div>

        <div className="action-bar">
          <MigrationOptions
            target={target}
            setTarget={setTarget}
            onMigrate={handleMigrate}
          />

          {!loading && migratedCode && (
            <button onClick={handleDownload} className="download-btn">
              Download
            </button>
          )}
        </div>

        {loading && (
          <p className="processing-migration-text">Processing migration…</p>
        )}

        {!loading && (
          <div className="diff-wrap">
            <DiffViewer oldCode={code} newCode={migratedCode} />
          </div>
        )}
      </div>
    </div>
  );
}
