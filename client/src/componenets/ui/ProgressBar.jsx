const ProgressBar = ({ progress }) => {
  return (
    <div className="w-37 bg-gray-200 h-2 rounded">
      <div
        className="bg-[#50D1B2]  h-2 rounded"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;