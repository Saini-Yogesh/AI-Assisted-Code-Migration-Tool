export const buildMigrationPrompt = ({ code, target }) => {

  const normalizedTarget = target.toLowerCase();
  const isTS = normalizedTarget === "typescript";

  return [
    "You are a senior software engineer maintaining large-scale production systems.",
    "You are careful, precise, and do not make assumptions.",
    "",
    "TASK:",
    `Migrate the provided legacy JavaScript code to ${isTS ? "TypeScript" : "ES6+"}.`,
    "",
    "ABSOLUTE RULES (MUST FOLLOW):",
    "- Preserve existing runtime behavior exactly",
    "- Do NOT change business logic or control flow",
    "- Do NOT add, remove, or reorder logic",
    "- Do NOT refactor for style unless required by the target",
    "- Do NOT introduce new dependencies",
    "- Do NOT output explanations, comments, or markdown",
    `- Output ONLY valid ${isTS ? "TypeScript" : "ES6+"} source code`,
    "",
    "MIGRATION GUIDELINES:",
    "- Replace var with let or const only when behavior remains identical",
    "- Convert function expressions to arrow functions ONLY if this binding is unaffected",
    "- Convert callbacks to async/await ONLY when semantics remain identical",
    "- Preserve function names, signatures, and exports",
    "- Use ES6 module syntax (import / export) without altering public APIs",
    ...(isTS
      ? [
        "- Add explicit TypeScript types; do NOT use any or unknown",
        "- Create interfaces or type aliases when they improve correctness",
        "- Enable strict null checks and type safety",
        "- Do NOT widen existing types"
      ]
      : [
        "- Use modern ES6+ syntax without changing behavior",
        "- Avoid deprecated or legacy patterns only when safe"
      ]),
    "",
    "CRITICAL EDGE CASES (DO NOT BREAK):",
    "- this binding and lexical scope",
    "- Closures and captured variables",
    "- Hoisting behavior and execution order",
    "- Mutable vs immutable state",
    "- Error handling and thrown exceptions",
    "- Side effects and shared state",
    "",
    "INPUT CODE:",
    code,
    "",
    "FINAL OUTPUT (CODE ONLY):"
  ].join("\n");
};
