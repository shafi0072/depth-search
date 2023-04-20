import ChevronRightIcon from '@mui/icons-material/ChevronRight';
export const Button = ({title, color}) => {
  return (
    <button className="btn d-flex align-items-center button_learn_more" style={{color:color}}>
     {title}
      <div className="button_arrow" >
        <ChevronRightIcon />
      </div>
    </button>
  );
};
