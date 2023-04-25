import React, { useCallback, useEffect, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import SearchIcon from "@mui/icons-material/Search";
import { navigator_menu_items } from "../../../constant/navigator";
import { useRouter } from "next/router";
import AosConfig from "../../../config/AosConfig";

const Navigator = ({searchBox, setSearchBox}) => {
  const router = useRouter();
  const handleSearchBox = () => {
    setSearchBox(!searchBox);
    console.log(searchBox)
  }
  return (
    <AosConfig>
      <nav
        className="navbar navbar-expand-lg container navigator_color"
        
      >
        <div className="container-fluid">
          <span className="navbar-brand text-dark p-2 menu-icon" href="#">
            <AppsIcon />
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse container" id="navbarNav">
            <ul className="navbar-nav ms-5 menu_items ps-5">
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
            
            <div className="menu_search p-2 ms-auto" onClick={handleSearchBox}>
              <SearchIcon />
            </div>
          </div>
        </div>
      </nav>
    </AosConfig>
  );
};

export default Navigator;
