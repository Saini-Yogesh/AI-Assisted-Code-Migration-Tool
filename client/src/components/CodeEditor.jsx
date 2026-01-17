import Editor from "@monaco-editor/react";

export default function CodeEditor({ value, onChange, language }) {
  return (
    <Editor
      height="400px"
      language={language}
      value={value}
      theme="vs-dark"
      onChange={(val) => onChange(val ?? "")}
      options={{
        // UI / UX
        minimap: { enabled: false },
        scrollBeyondLastLine: false,
        wordWrap: "on",

        // Line numbers & guides
        lineNumbers: "on",
        renderLineHighlight: "all",

        // Editing helpers
        autoClosingBrackets: "always",
        autoClosingQuotes: "always",
        formatOnPaste: true,
        formatOnType: true,

        // Suggestions
        quickSuggestions: true,
        suggestOnTriggerCharacters: true,
        tabCompletion: "on",

        // Code folding
        folding: true,
        showFoldingControls: "always",

        // Misc
        contextmenu: true,
        mouseWheelZoom: true,
        tabSize: 4,
        insertSpaces: true,
      }}
    />
  );
}
