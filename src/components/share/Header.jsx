import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink for routing
import iphamarlogo from '/images/logo.png';
import { MdSearch } from "react-icons/md";
import { HiBars3 } from "react-icons/hi2";

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Company", path: "/Empower" },
    { name: "Solutions", path: "/solutions" },
    { name: "Partners", path: "/partners" },
    { name: "Careers", path: "/Career" },
    { name: "FAQ", path: "/Faq" },
    { name: "Contact", path: "/ContactUs" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img
            src={iphamarlogo}
            className="logoimg"
            alt="iPhamar company logo"
          />
        </NavLink>

        {/* Toggle Button for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <HiBars3 className="navbar-toggler-icon" />
        </button>

        {/* Nav Links & Search Bar */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item, index) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to={item.path}
                  onClick={() => setActiveIndex(index)}
                  aria-current={index === activeIndex ? "page" : undefined}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="search-container">
            <MdSearch className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;