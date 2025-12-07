import React from "react";  
import Greeting from "./Greeting.jsx";
import SocialLinks from "./SocialLinks.jsx";    

const Header = () => {
  return (
    <nav className="header">
        <Greeting />
        <SocialLinks />
    </nav>
  );
}
export default Header;

