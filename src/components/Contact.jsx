import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT Me</h1>
        <div className="contact_icon"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        >
          <a href="https://www.google.com" target="_blank" className="item">
            <FaInstagram className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <CiFacebook className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <FaLinkedinIn className="icons" />
          </a>
          <a href="https://www.github.com" target="_blank" className="item">
            <FaGithub className="icons" />
          </a>
          <a href="https://www.google.com" target="_blank" className="item">
            <BsTwitterX className="icons" />
          </a>
          <a href="mailto::adiljamal002@gmail.com" target="_blank" className="item">
            <BiLogoGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
