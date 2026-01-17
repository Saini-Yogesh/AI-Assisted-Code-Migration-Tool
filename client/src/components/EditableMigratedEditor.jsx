import Editor from "@monaco-editor/react";
import { editerOptios } from "../services/themeStyles";

export default function EditableMigratedEditor({ value, onChange, language }) {
  if (!value) return null;

  return (
    <div
      style={{
        marginTop: 20,
        border: "1px solid #1f2937",
        borderRadius: 8,
        overflow: "hidden",
        background: "#020617",
      }}
    >
      <div
        style={{
          padding: "10px 14px",
          background: "#020617",
          borderBottom: "1px solid #1f2937",
          color: "#e5e7eb",
          fontWeight: 600,
          letterSpacing: "0.3px",
          textAlign: "center",
        }}
      >
        Edit Migrated Code
      </div>
      <Editor
        height="300px"
        language={language}
        value={value}
        onChange={onChange}
        theme="vs-dark"
        options={editerOptios}
      />
    </div>
  );
}
