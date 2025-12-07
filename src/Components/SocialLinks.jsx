import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/michelle-berthiaume-3892b034"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={linkedin} alt="LinkedIn Profile" />
      </a>

      <a
        href="https://github.com/atlas-school-classroom/react-and-jsx-MichelleBert17"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} alt="GitHub Repository" />
      </a>
    </div>
  );
};

export default SocialLinks;
