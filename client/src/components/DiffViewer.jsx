import ReactDiffViewer, { DiffMethod } from "react-diff-viewer-continued";
import { darkDiffStyles } from "../services/themeStyles";

export default function DiffViewer({ oldCode, newCode }) {
  if (!newCode) return null;

  return (
    <div className="diff-viewer">
      <div className="live-header">
        <span className="live-dot"></span>
        Live Diff View
      </div>

      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView
        useDarkTheme
        styles={darkDiffStyles}
        compareMethod={DiffMethod.WORDS}
        showDiffOnly={false}
        disableWordDiff={false}
      />
    </div>
  );
}
