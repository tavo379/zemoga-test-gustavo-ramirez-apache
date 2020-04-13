import React from "react";
import logo from "../../images/logo.png";
import { Footer } from "./styles";
import { AiFillFacebook, AiOutlineTwitter } from "react-icons/ai";

export const FooterContainer = () => {
  return (
    <Footer>
      <ul>
        <li>Terms and Conditions</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>

      <div>
        <span>Follow Us</span>
        <AiFillFacebook size="25px" color="#333333" />
        <AiOutlineTwitter size="25px" color="#333333" />
      </div>
    </Footer>
  );
};
