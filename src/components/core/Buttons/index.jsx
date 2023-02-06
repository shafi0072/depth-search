import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import React from 'react';
export const Buttons = ({title, color}) => {
  return (
    <button className="btn d-flex align-items-center button_learn_more" style={{color:color}}>
     {title}
      <div className="button_arrow" >
        <ChevronRightIcon />
      </div>
    </button>
  );
};
