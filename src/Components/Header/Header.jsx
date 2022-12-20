import React, { useState, useEffect } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

// import React from 'react'
// import { Link } from 'react-router-dom';

import "./Header.css";
import Icon5 from "../../img/Icon5.png";
import { Link, Navigate } from "react-router-dom";

export const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isLoggedin, setIsloginin] = useState(false);

  console.log(isClicked);
  console.log(isLoggedin);

  const handleLogout = () => {
    localStorage.removeItem("digiMediaUser");
    setIsloginin(false);
  };

  useEffect(() => {
    if (localStorage.getItem("digiMediaUser")) {
      setIsloginin(true);
    } else {
      setIsloginin(false);
    }
  }, []);

  return (
    // <div>
      <div className="header">
        <div>
          <Link style={{ textDecoration: "none" }} to="/">
            <a
              style={{ textDecoration: "none" }}
              className="mm10px txt-decoration txt-color letter-sp heading-digimedia margin-right-left letter-sp "
              href="/"
            >
              DigiMedia
            </a>
          </Link>
        </div>

        {!isLoggedin ? (
          <></>
        ) : (
          <div className="common-links margin-right-left">
            <Link style={{ textDecoration: "none" }} to="/home">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp "
                href="home"
              >
                Home
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/about">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp"
                href="about"
              >
                About
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/service">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp"
                href="service"
              >
                Service
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/project">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp"
                href="project"
              >
                Project
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/blog">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp"
                href="blog"
              >
                Blog
              </a>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/contact">
              <a
                style={{ textDecoration: "none" }}
                className="mm10px txt-decoration txt-color letter-sp"
                href="contact"
              >
                Contact
              </a>
            </Link>
          </div>
        )}

        <div className="log-sign">
          {!isLoggedin ? (
            <>
              <button className="mm10px btn-freequotes">Log In</button>
              <button className="mm10px btn-freequotes">Sign Up</button>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="mm10px btn-freequotes">
                <Link style={{ textDecoration: "none" }} to="/">
                  Log Out
                </Link>{" "}
              </button>
            </>
          )}
        </div>

        {/* STEP 2 */}
        <div className="menu-wrapper">
          <div className="menu" onClick={() => setIsClicked(!isClicked)}>
            <img src={Icon5} alt="" />
            <input
              type="checkbox"
              id="checkbox3"
              className="checkbox3 visuallyHidden"
              disabled
              checked={isClicked}
            />
          </div>
          {/* Mobile Menu */}
          {isClicked && (
            <>
              <div className="open-menu">
                <div className="open-menu-opts">
                  <Link style={{ textDecoration: "none" }} to="/home">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="/home"
                    >
                      Home
                    </a>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/about">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="service"
                    >
                      About
                    </a>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/service">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="service"
                    >
                      Service
                    </a>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/project">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="project"
                    >
                      Project
                    </a>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/blog">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="blog"
                    >
                      Blog
                    </a>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/contact">
                    <a
                      style={{ textDecoration: "none" }}
                      className="option"
                      href="contact"
                    >
                      Contact
                    </a>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    // </div>
  );
};

export default Header;
