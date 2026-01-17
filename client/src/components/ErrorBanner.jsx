export default function ErrorBanner({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="error-banner">
      <span className="error-banner__message">{message}</span>
      <button className="error-banner__close" onClick={onClose}>
        &times;
      </button>
    </div>
  );
}
