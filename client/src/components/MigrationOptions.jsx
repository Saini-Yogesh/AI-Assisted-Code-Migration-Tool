export default function MigrationOptions({ target, setTarget, onMigrate }) {
  return (
    <div className="migration-options">
      <select
        className="migration-select"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
      >
        <option value="ES6">ES6+</option>
        <option value="TypeScript">TypeScript</option>
      </select>

      <button className="migration-btn" onClick={onMigrate}>
        Migrate
      </button>
    </div>
  );
}
