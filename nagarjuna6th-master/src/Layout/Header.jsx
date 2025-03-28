import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" container-fluid">
        <div className="row bg-blue-950 text-fuchsia-900">
          <div className="col-12 col-md-3 text-center mt-2">
            <a className="navbar-brand fs-3 fw-bold font-serif" href="#">
              Kitab.
            </a>
          </div>

          <div className="col-12 col-md-6 mt-2">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button className="btn btn-primary , mybuttoncolor" type="submit">
                Search
              </button>
            </form>
          </div>

          <div className="col-12 col-md-3 fs-3 d-flex justify-content-evenly mt-1 ">
            <a href="">
              <i className="bi bi-box-arrow-in-left"></i>
            </a>
            <Link to={"http://localhost:5173/register"}>
              <i className="bi bi-person-plus"></i>
            </Link>
            <Link to={"http://localhost:5173/cart"}>
              <i className="bi bi-cart"></i>
            </Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-blue-950 ">
        <div className="container-fluid ">
          <button
            className=" navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="text-white">&#9776;</span>
          </button>

          <div
            className="collapse navbar-collapse  "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item hover:bg-amber-50">
                <Link
                  className="nav-link active text-fuchsia-900 fw-bold"
                  aria-current="page"
                  to={"http://localhost:5173/#"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item hover:bg-amber-50">
                <Link
                  className="nav-link text-fuchsia-900 fw-bold"
                  to={"http://localhost:5173/products"}
                >
                  Library
                </Link>
              </li>
              <li className="nav-item hover:bg-amber-50">
                <Link className="nav-link text-fuchsia-900 fw-bold" href="#">
                  Genre
                </Link>
              </li>
              <li className="nav-item hover:bg-amber-50">
                <Link className="nav-link text-fuchsia-900 fw-bold" href="#">
                  Blogs
                </Link>
              </li>
              <li className="nav-item hover:bg-amber-50">
                <Link
                  className="nav-link text-fuchsia-900 fw-bold"
                  to={"http://localhost:5173/contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
