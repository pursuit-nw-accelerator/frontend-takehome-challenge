import "./ErrorMessage.scss";

const ErrorMessage = ({ error }) => {
  return (
    <div className="error-container">
      ERROR: <span className="error-message">{error}</span>
    </div>
  );
};

export default ErrorMessage;
