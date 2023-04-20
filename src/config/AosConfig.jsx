import React, { useCallback, useEffect, useState } from "react";
import "aos/dist/aos.css";
import Aos from "aos";


const AosConfig = ({children }) => {
  
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return children 
  
};

export default AosConfig;
