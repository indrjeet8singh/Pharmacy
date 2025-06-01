import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import iphamarlogo from '/images/logo.png';
import { MdSearch } from "react-icons/md";
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // Add state for search input

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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Add search logic here (e.g., filter results or trigger a search API)
  };

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
          onClick={toggleMenu}
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Nav Links & Search Bar */}
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.name}>
                <NavLink
                  className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click (mobile)
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="search-container ">
            <MdSearch className="search-icon" />
            <input
              type="text"
              className="search-bar"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
