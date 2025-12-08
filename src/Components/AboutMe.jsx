import React from "react";
import mePic from "../assets/mepic.jpg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>

      <img
        src={mePic}
        alt="Michelle Berthiaume"
        className="about-me-image"
        style={{ width: "200px", borderRadius: "10px", marginBottom: "1rem" }}
      />

      <p>
        Hello! I'm Michelle! I think I am in the third trimester, but I'm not
        entirely sure — I had to retake a class, then they put me in a class
        without the correct prerequisite, and there were some scheduling gaps.
        So… the timeline is a little fuzzy!
      </p>

      <p>I like front-end development much more than back-end.</p>

      <p>
        I enjoy working with HTML, CSS, and JavaScript because you can actually
        *see* your work as you build. It's creative and visual, which I love.
      </p>

      <p>
        Outside of school, my hobbies include camping, hiking, reading, and
        (unfortunately) doom-scrolling. I also enjoy cooking — although having a
        maid to handle the shopping and cleanup would make it even better!
      </p>
    </div>
  );
};

export default AboutMe;
