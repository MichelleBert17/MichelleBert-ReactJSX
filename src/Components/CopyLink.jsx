import React from "react";
import copyIcon from "../assets/copy.svg";

const CopyLink = ({ link }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    alert("Link copied to clipboard!");
  };

  return (
    <img
      src={copyIcon}
      alt="copy link"
      className="copy"
      onClick={handleCopy}
    />
  );
};

export default CopyLink;
