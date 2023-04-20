import React from 'react';
import SearchIcon from "@mui/icons-material/Search";
const Index = ({searchBox}) => {
  return (
    <div className='container d-flex justify-content-end mt-3'>
      {searchBox && <div className='search p-3'>
        <div className='d-flex justify-content-between search_div_border'>
        <div className='search_input'>
        <input type="text" name="" id="" placeholder='Search'/>
        </div>
        <div className='search_icon'>
          <SearchIcon />
        </div>
        </div>
      </div>}
    </div>
  );
};

export default Index;