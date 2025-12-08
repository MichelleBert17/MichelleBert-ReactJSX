import React from "react";
import OpenLink from "./OpenLink.jsx";
import CopyLink from "./CopyLink.jsx";

const HelpfulResource = ({ link, label }) => {
  return (
    <div className="helpful-resource">
      <span>{label}</span>
      <OpenLink link={link} />
      <CopyLink link={link} />
    </div>
  );
};

export default HelpfulResource;
<Section title="Helpful Resources">
  <HelpfulResource 
    link="https://react.dev/learn" 
    label="React Official Docs" 
  />

  <HelpfulResource 
    link="https://www.w3schools.com/react/" 
    label="W3Schools React Tutorial" 
  />

  <HelpfulResource 
    link="https://www.freecodecamp.org/news/get-started-with-react-for-beginners/" 
    label="freeCodeCamp, Getting Started with React" 
  />
</Section>
