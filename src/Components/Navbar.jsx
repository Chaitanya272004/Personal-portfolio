import React, { useState } from "react";
import Dashboard from "@mui/icons-material/Dashboard";
import InfoIcon from "@mui/icons-material/Info";
import SkillIcon from "@mui/icons-material/Settings";
import ContactIcon from "@mui/icons-material/PhoneRounded";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-scroll'; // Import the Link component from react-scroll
import 'animate.css';

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const menuOptions = [
    {
      text: "Home",
      icon: <Dashboard />,
      to: "home" // Add the 'to' property for smooth scrolling
    },
    {
      text: "About",
      icon: <InfoIcon />,
      to: "about" // Add the 'to' property for smooth scrolling
    },
    {
      text: "Skills",
      icon: <SkillIcon />,
      to: "skills" // Add the 'to' property for smooth scrolling
    },
    {
      text: "Contact",
      icon: <ContactIcon />,
      to: "contact" // Add the 'to' property for smooth scrolling
    },
  ];

  return (
    <div className="navbar-container">
      <div className="nav-header">
        <div className="animate__animated animate__fadeInDown">
          <h1>Chaitanya Rowthu</h1>
        </div>
        <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <CloseIcon /> : <MenuIcon />}
        </div>
      </div>
      <div className={`nav-menu ${openMenu ? "open" : ""}`}>
        {menuOptions.map((option, index) => (
          <Link
            key={index}
            to={option.to}
            smooth={true}
            duration={500}
            className="nav-link"
            onClick={() => setOpenMenu(false)} // Close the menu on link click
          >
            {option.icon}
            {option.text}
          </Link>
        ))}
      </div>
    </div>
  );
};
