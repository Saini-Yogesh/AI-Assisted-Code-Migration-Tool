import { useState } from "react";

export default function MigrationOptions({ target, setTarget, onMigrate }) {
  const [disabled, setDisabled] = useState(false);

  const handleClick = async () => {
    setDisabled(true);
    await onMigrate();
    setDisabled(false);
  };

  return (
    <div className="migration-options">
      <select
        className="migration-select"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        disabled={disabled}
      >
        <option value="ES6">ES6+</option>
        <option value="TypeScript">TypeScript</option>
      </select>

      <button
        className="migration-btn"
        onClick={handleClick}
        disabled={disabled}
      >
        {disabled ? "Migrating..." : "Migrate"}
      </button>
    </div>
  );
}
