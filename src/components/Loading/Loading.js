import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      Loading...
      <div className="progress">
        <div className="progress-color"></div>
      </div>
    </div>
  );
};

export default Loading;
