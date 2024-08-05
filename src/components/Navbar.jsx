import React from "react";

const Navbar = () => {
  return (
    <>
      <div
        className="container nav_bar"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="right nav_item">Porfolio</div>
        <div className="left">
          <a href="#home" className="nav_item">
            Home
          </a>
          <a href="#exp" className="nav_item">
            Experience
          </a>
          <a href="#skill" className="nav_item">
            Skills
          </a>
          <a href="#project" className="nav_item">
            Projects
          </a>
          <a href="#contact" className="nav_item">
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
