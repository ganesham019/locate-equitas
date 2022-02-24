import React from "react";
import logo from "../Images/logo.svg";
import { ImLocation2 } from "react-icons/im";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav
        class="navbar navbar-expand-lg  navbar-light bg-light sticky-top"
        role="navigation"
      >
        <div class="container">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              class="img-fluid "
              alt=""
              style={{ width: "130px", height: "100%" }}
            />
          </a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ml-auto mr-auto"
            id="collapsibleNavId"
          >
            <ul class="navbar-nav  ml-auto mr-auto mt-2 mt-lg-0">
              <Link to="/">
                <li class="nav-item active">
                  <a class="nav-link" href="#">
                    OVERVIEWS <span class="sr-only">(current)</span>
                  </a>
                </li>
              </Link>
              <Link to="/products">
                <li class="nav-item list-unstyled text-decoration-none">
                  <a class="nav-link text-decoration-none " href="#">
                  PRODUCTS
                  </a>
                </li>
              </Link>

              <Link to="/offer">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    OFFERS
                  </a>
                </li>
              </Link>
              <Link to="/articles">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    ARTICLES
                  </a>
                </li>
              </Link>

              <Link to="/map">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    MAP
                  </a>
                </li>
              </Link>

              <Link to="/reviews">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    REVIEWS
                  </a>
                </li>
              </Link>

              <Link to="/phv">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    PHOTOS & VIDEOS
                  </a>
                </li>
              </Link>

            </ul>
            <div class="d-flex text-center justify-content-center ">
              <div class="d-flex flex-row text-center  justify-content-center ">
                <div class="d-flex mx-auto  mb-0   justify-content-center align-items-center">
                  <ImLocation2 />
                </div>
                <div class="d-flex  ml-2 mt-3 mb-0  justify-content-center align-items-center">
                  <p>Location</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
