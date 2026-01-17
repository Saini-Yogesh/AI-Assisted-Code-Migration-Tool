import ReactDiffViewer from "react-diff-viewer";

export default function DiffViewer({ oldCode, newCode }) {
  if (!newCode) return null;

  return (
    <ReactDiffViewer oldValue={oldCode} newValue={newCode} splitView={true} />
  );
}
