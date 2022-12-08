import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <div>
          <a className="navbar-brand home-logo" href="#">
            <img
              className="my-4"
              src="https://celebrer.org/wp-content/uploads/2022/06/cropped-WhatsApp-Image-2022-06-12-at-8.55.26-PM-170x57.jpeg"
              alt="..."
            />
          </a>
        </div>

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
          <ul className="navbar-nav mb-auto mb-2 mb-lg-0">
            <li className="nav-item mx-4">
              <a className="nav-link active" href="#" target={"_Blank"}>
                Home
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" href="#" target={"_Blank"}>
                About
              </a>
            </li>

            <li className="nav-item mx-4">
              <a className="nav-link active" href="#" target={"_Blank"}>
                Services
              </a>
            </li>
            <li className="nav-item mx-4">
              <a className="nav-link active" href="#" target={"_Blank"}>
                Contact
              </a>
            </li>
          </ul>

          <ul className="second-list navbar-nav ms-auto ">
            <li className="facebook mx-3">
              <a className="fb" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li className="insta mx-3">
              <a className="fb" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="twitter mx-3">
              <a className="fb" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className=" mx-5">
              <a className="nav-btn" href="#">
                <div className="work">WORK WITH US</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
