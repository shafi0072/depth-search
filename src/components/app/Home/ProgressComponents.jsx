import React from "react";
import ProgressBar from "./ProgressBar";

const ProgressComponents = ({title, progress}) => {
  return (
    <div className="mt-5">
      <div className="content_progressBar d-flex justify-content-between">
        <h4>{title}</h4>
        <h5>{progress}%</h5>
      </div>
      <ProgressBar progress={progress} />
    </div>
  );
};

export default ProgressComponents;
