import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black px-3">
      <div className="container-fluid">
        <a className="navbar-brand text-white fs-1" href="/">
          <span className="border border-danger px-2 bg-danger">S</span> umit
          Khanwalkar
        </a>

        <button
          className="navbar-toggler bg-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{ filter: "invert(100%)" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white fs-5 fw-bold m-3" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fs-5 fw-bold m-3" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fs-5 fw-bold m-3"
                href="/services"
              >
                Services
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fs-5 fw-bold m-3"
                href="/gallery"
              >
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white fs-5 fw-bold m-3"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
