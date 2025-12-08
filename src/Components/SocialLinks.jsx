import React from "react";
import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";

const SocialLinks = () => {
  return (
    <><div className="social-links">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/michelle-berthiaume-3892b034"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my LinkedIn Profile"
      >
        <img src={linkedin} alt="LinkedIn icon" />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/MichelleBert17/MichelleBert-ReactJSX"
        target="_blank"
        rel="noopener noreferrer"
        title="Visit my GitHub Repository"
      >
        <img src={github} alt="GitHub icon" />
      </a>
    </div><Section title="Live Website">
        <p>
          You can view my deployed React project here:{" "}
          <a
            href="https://https://december8.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </p>
      </Section></>

  );
};

export default SocialLinks;
