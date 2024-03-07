import "./Error.scss";

const Error = ({ error }) => {
  return (
    <div className="error-container">
      ERROR: <span className="error-message">{error}</span>
    </div>
  );
};

export default Error;
