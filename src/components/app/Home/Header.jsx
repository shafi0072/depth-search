import React, { useState } from "react";
import HeaderContent from "./HeaderContent";
import Navigator from "./Navigator";
import Search from "./Search";
const Header = () => {
  const [searchBox, setSearchBox] = useState(false);
  
  return (
    <div className="header">
      <Navigator searchBox={searchBox} setSearchBox={setSearchBox} />
      <Search searchBox={searchBox} />
      <HeaderContent/>
    </div>
  );
};

export default Header;
