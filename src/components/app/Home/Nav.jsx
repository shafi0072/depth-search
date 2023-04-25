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

      <nav className="navbar navbar-expand-lg bg-light navbarMain">
        <div className="container-fluid container">
          <span
            className="navbar-brand d-flex justify-content-center align-items-center"
           
          >
            <div className="logo_icon"><img src="/images/logo.png" className="w-80" alt="" /></div>
           
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
          <div className="navbar-nav ms-5 menu_items cursor-pointer" id="navbarNav1">
            <ul className="navbar-nav ms-auto">
            {navigator_menu_items.map((data) => (
                <li
                  key={data?.name}
                  className={
                    data?.dropDown
                      ? "nav-item dropdown ms-3"
                      : "nav-item ms-3"
                  }
                >
                  <span
                    className={
                      data?.dropDown ? "nav-link dropdown-toggle" : "nav-link"
                    }
                    onClick={() => router.push(data?.link)}
                    role={data?.dropDown ? "button" : ""}
                    data-bs-toggle={data?.dropDown ? "dropdown" : ""}
                    aria-expanded="false"
                  >
                    {data?.name}
                  </span>
                  <ul className="dropdown-menu navbarBackground text-light">
                    {data?.dropDown?.length > 0 &&
                      data?.dropDown.map((data) => (
                        <li key={data?.name}>
                          <span
                            className="dropdown-item"
                            onClick={() => router.push(data?.link)}
                          >
                            {data?.name}
                          </span>
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
             
            </ul>
            
          </div>
        </div>
      </nav>

  );
};

export default Nav;
