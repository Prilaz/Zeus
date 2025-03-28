import React from "react";
import { isAuthenticated } from "../api/userApi";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  //let data = isAuthenticated()
  //const role = data.role

  const { role, token } = isAuthenticated();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault;
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark text-white">
          <div className="col-12 col-md-3 text-center">
            <a className="navbar-brand fs-3 fw-bold" href="#">
              Navbar
            </a>
          </div>
          <div className="col-12 col-md-6 py-1">
            <form className="d-flex p-1" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn mybuttoncolor" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-12 col-md-3 fs-3 d-flex justify-content-evenly">
            <>
              <Link to="/admin"></Link>
            </>
            <i className="bi bi-box-arrow-in-left text-white"></i>
            <i className="bi bi-person-plus text-white"></i>
            <i className="bi bi-cart text-white"></i>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-slate-200 text-black">
        <div className="container-fluid">
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
