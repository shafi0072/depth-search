import Link from "next/link";
import React, { useCallback, useEffect, useState } from "react";
import { contract_Navbar_logo } from "../../../constant/contractNav";
import { contract_navbar_contractInfo } from "../../../constant/contractNav";
import { navigator_menu_items } from "../../../constant/navigator";
import { useRouter } from "next/router";
import AosConfig from "../../../config/AosConfig";

const Nav = () => {
  const router = useRouter();
  const { icon, name } = contract_Navbar_logo;
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuChange, setMenuChange] = useState(null);

  


  
  return (
    <AosConfig>
      <nav className="navbar navbar-expand-lg bg-light navbarMain">
        <div className="container-fluid container">
          <span
            className="navbar-brand d-flex justify-content-center align-items-center"
            href="#"
          >
            <div className="logo_icon">{icon}</div>
            <div className="ms-2 logo_branding">
              <h2>{name}</h2>
            </div>
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav1"
            aria-controls="navbarNav1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav1">
            <ul className="navbar-nav ms-auto">
              {
                contract_navbar_contractInfo.map((contractInfo) => (
                  <li
                    
                    key={contractInfo?.contractInfo?.label}
                    className="nav-item"
                  >
                    <a
                      className="nav-link active d-flex align-items-center"
                      aria-current="page"
                      href="#"
                    >
                      <div className="contract_icon">{contractInfo?.icon}</div>
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
                          <span className="contract_information">
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
      </nav>
    </AosConfig>
  );
};

export default Nav;
