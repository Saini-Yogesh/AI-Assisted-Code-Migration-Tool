import Editor from "@monaco-editor/react";
import { editerOptios } from "../services/themeStyles";

export default function CodeEditor({ value, onChange, language }) {
  return (
    <Editor
      height="400px"
      language={language}
      value={value}
      theme="vs-dark"
      onChange={(val) => onChange(val ?? "")}
      options={editerOptios}
    />
  );
}
