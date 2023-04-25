import React from "react";
import { social_media_data } from "../../../constant/socialMedia";
import { useRouter } from "next/router";
import { contract_navbar_contractInfo } from "../../../constant/contractNav";
import Link from "next/link";
const Social = () => {
  const router = useRouter();
  return (
    <div className="social_body ">
      <div className="d-flex justify-content-between align-items-center container">
      <ul className="nav  ">
        {social_media_data.map((icon) => (
          <li className="nav-item cursor-pointer" key={icon?.links}>
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
      <ul className="nav  ">
        {contract_navbar_contractInfo.map((contractInfo) => (
          <li
                    
                    key={contractInfo?.contractInfo?.label}
                    className="nav-item"
                  >
                    <a
                      className="nav-link active d-flex align-items-center"
                      aria-current="page"
                      href="#"
                    >
                      <div className="contract_icon ">{contractInfo?.icon}</div>
                      <div className="ms-1 contractInfoLabel">
                        <span>{contractInfo?.label}</span>
                        <Link
                          href={
                            contractInfo?.contact_number
                              ? `tel:${contractInfo?.contact_number}`
                              : contractInfo?.contact_whatsapp
                              ? `whatsapp://send?text=Hello Depth Search!&phone=${contractInfo?.contact_whatsapp}`
                              : `mailto:${contractInfo?.contact_mail}`
                          }
                          
                        >
                          <span className="textColor">
                            {" "}
                            {contractInfo?.contact_number
                              ? contractInfo?.contact_number
                              : contractInfo?.contact_whatsapp
                              ? contractInfo?.contact_whatsapp
                              : contractInfo?.contact_mail}
                          </span>
                        </Link>
                      </div>
                    </a>
                  </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default Social;
