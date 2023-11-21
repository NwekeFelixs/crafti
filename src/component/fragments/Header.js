import React, { useState, useEffect } from 'react';
import '../css/style.css';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const Header = () => {
  const [isNavbarActive, setNavbarActive] = useState(false);

  const toggleNav = () => {
    setNavbarActive(!isNavbarActive);
  };

  useEffect(() => {
    const header = document.querySelector("[data-header]");
    const overlay = document.querySelector("[data-overlay]");

    const handleScroll = () => {
      if (window.scrollY > 100) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    const navToggler = document.querySelector("[data-nav-toggler]");
    navToggler.addEventListener("click", toggleNav);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggler.removeEventListener("click", toggleNav);
    };
  }, [isNavbarActive]);

  return (
    <header className={`header ${isNavbarActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          Crafti
        </a>

        <nav className={`navbar ${isNavbarActive ? 'active' : ''}`} data-navbar>
          <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <IoCloseOutline />
          </button>

          <ul className="navbar-list">
            <li>
              <a href="#" className="navbar-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="navbar-link">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
          <IoMenuOutline />
        </button>

        <div className={`overlay ${isNavbarActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Header;
