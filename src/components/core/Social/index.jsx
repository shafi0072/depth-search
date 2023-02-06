import React from 'react';

import { social_media_data } from "../../../constant/socialMedia";
import { useRouter } from "next/router";
const Index = () => {
  return (
    <div className="social_body p-1">
      <ul className="nav flex justify-end container">
        {social_media_data.map((icon) => (
          <li className="nav-item" key={icon?.links}>
            <span
              className="nav-link active ml-3"
              aria-current="page"
              onClick={() => router.push(icon?.links)}
            >
              {icon?.icon}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;