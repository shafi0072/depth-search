import React from "react";
import { social_media_data } from "../../../constant/socialMedia";
import { useRouter } from "next/router";
const Social = () => {
  const router = useRouter();
  return (
    <div className="social_body">
      <ul className="nav justify-content-end container">
        {social_media_data.map((icon) => (
          <li className="nav-item" key={icon?.links}>
            <span
              className="nav-link active"
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

export default Social;
