import Editor from "@monaco-editor/react";
import { editerOptios } from "../services/themeStyles";

export default function CodeEditor({ value, onChange, language }) {
  return (
    <div>
      <div style={{ marginBottom: 6, fontWeight: 600 }}>
        Paste Legacy JavaScript Code Here
      </div>

      <Editor
        height="380px"
        language={language}
        value={value}
        theme="vs-dark"
        onChange={(val) => onChange(val ?? "")}
        options={editerOptios}
      />
    </div>
  );
}
