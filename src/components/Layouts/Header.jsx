import React from "react";
import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Sidebar from "./Sidebar";
const Header = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg d-none d-md-block"
        style={{
          backgroundColor: "#010901",
          borderBottom: "2px solid #0b6a0e",
        }}
        id="navbar_top"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Safuu
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto text-center mb-2  mb-lg-0">
              <div className="nav_icons d-flex align-items-center">
                <a href="#">
                  <BsTwitter color="white" size={27} className=" icons mx-2" />
                </a>
                <a href="#">
                  <FaDiscord color="white" size={27} className=" icons mx-2" />
                </a>
                <a href="#">
                  <BsTelegram color="white" size={27} className=" icons mx-2" />
                </a>
                <a href="#">
                  <FaFacebookF
                    color="white"
                    size={27}
                    className=" icons mx-2"
                  />
                </a>
              </div>
              <li className="nav-item ">
                <Link
                  className="nav-link safu_link "
                  aria-current="page"
                  to="#"
                >
                  Safuu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link connect_wallet" to="#">
                  Connect Wallet
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav
        className="navbar navbar-expand-lg d-block d-md-none "
        style={{
          zIndex: "1",
          backgroundColor: "#010901",
          borderBottom: "2px solid #0b6a0e",
        }}
        id="navbar_top"
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar"
            // style={{color: '#fff'}}
          >
            <span className="navbar-toggler-icon" style={{backgroundColor: '#36d33b' , width: '32px', borderRadius: '6px'}} />
          </button>
                <Link className="nav-link connect_wallet" to="#">
                  Connect Wallet
                </Link>
        </div>
        <div className="offcanvas offcanvas-start text-bg-dark" tabIndex={-1} id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
  <div className="offcanvas-header">
    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
  </div>
  <div className="offcanvas-body">
    <Sidebar/>
  </div>
</div>

      </nav>
    </>
  );
};

export default Header;
