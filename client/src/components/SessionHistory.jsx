export default function SessionHistory({
  sessions,
  onSelect,
  onDelete,
  selectedId,
}) {
  if (!sessions || sessions.length === 0) {
    return <p className="history-empty">No history yet</p>;
  }

  return (
    <div className="history-list">
      <h2>Session History</h2>

      {sessions.map((s) => (
        <div
          key={s._id}
          className={`history-item ${selectedId === s._id ? "active" : ""}`}
          onClick={() => onSelect(s)}
          style={{ cursor: "pointer" }}
        >
          <div className="history-content">
            <div className="history-target">
              <b>{s.target}</b>
            </div>
            <small className="history-time">
              {new Date(s.createdAt).toLocaleString()}
            </small>
          </div>

          <button
            className="history-delete"
            onClick={(e) => {
              e.stopPropagation(); // 🔥 prevents select
              onDelete(s._id);
            }}
          >
            ❌
          </button>
        </div>
      ))}
    </div>
  );
}
