import React from "react";

const ProgressBar = ({progress}) => {
  return (
    <div class="progress">
      <div
        class="progress-bar"
        role="progressbar"
        style={{width: `${progress}%`}}
        aria-valuenow= {progress}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
