import React from "react";
import OpenLink from "./OpenLink.jsx";
import CopyLink from "./CopyLink.jsx";

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      {label}
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
};

export default HelpfulResource;
