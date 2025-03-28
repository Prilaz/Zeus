import React from "react";

const Footer = () => {
  return (
    <div /* style={{
      backgroundColor:"teal",
      padding:"10px",
      textAlign:"center",
      fontSize:"30px"
    }}*/
    >
      <div className="footer bg-dark ">
        <div className="flex justify-center">
          <div className="nav-bar fs-3 font-bold ms-10 p-10 text-light ">
            FOOTER
          </div>
          <div className="text-light p-10">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active hover:text-red-600 "
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item  hover:bg-blue-200">
                <a className="nav-link " href="#">
                  Library
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  hover:bg-amber-600" href="#">
                  Genre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  hover:bg-amber-600" href="#">
                  Blogs
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link  hover:bg-amber-600" href="#">
                  Link
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
