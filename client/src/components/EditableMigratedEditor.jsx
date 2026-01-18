import Editor from "@monaco-editor/react";
import { editerOptios } from "../services/themeStyles";

export default function EditableMigratedEditor({ value, onChange, language }) {
  if (!value) return null;

  return (
    <div className="migrated-editor-container">
      <div className="migrated-editor-header">Edit Migrated Code</div>

      <Editor
        height="400px"
        language={language}
        value={value}
        onChange={onChange}
        theme="vs-dark"
        options={editerOptios}
      />
    </div>
  );
}
