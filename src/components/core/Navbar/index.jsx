import React from "react"
import {Nav_data} from '../../../constant/Navbar'
const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <h3 className="" href="#">
          DEPTH SEARCH
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
            <li className="nav-item">
              <h4
                className="nav-link active text-light"
                aria-current="page"
                href="#"
              >
                Home
              </h4>
            </li>
            <li className="nav-item">
              <h4 className="nav-link text-light" href="#">
                Link
              </h4>
            </li>
            <li className="nav-item dropdown">
              <h4
                className="nav-link dropdown-toggle text-light"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </h4>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Index;
