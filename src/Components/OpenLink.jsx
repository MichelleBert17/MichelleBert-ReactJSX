import React from "react";
import openIcon from "../assets/open.svg";

const OpenLink = ({ link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="open-link"
    >
      <img src={openIcon} alt="open link" />
    </a>
  );
};

export default OpenLink;
