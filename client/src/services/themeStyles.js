export const darkDiffStyles = {
    variables: {
        dark: {
            diffViewerBackground: "#020617",
            diffViewerColor: "#e5e7eb",

            addedBackground: "rgba(34,197,94,0.15)",
            addedColor: "#dcfce7",

            removedBackground: "rgba(239,68,68,0.15)",
            removedColor: "#fee2e2",

            wordAddedBackground: "rgba(34,197,94,0.35)",
            wordRemovedBackground: "rgba(239,68,68,0.35)",

            gutterBackground: "#020617",
            gutterColor: "#64748b",

            addedGutterBackground: "#052e16",
            removedGutterBackground: "#450a0a",

            highlightBackground: "#1e293b",
            highlightGutterBackground: "#1e293b",

            codeFoldBackground: "#020617",
            emptyLineBackground: "#020617",
        },
    },
    line: {
        fontFamily: "JetBrains Mono, monospace",
        fontSize: "13px",
        lineHeight: "1.5",
    },
    gutter: {
        minWidth: "44px",
    },
};

export const editerOptios = {
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
};