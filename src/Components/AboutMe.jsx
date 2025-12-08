import React from "react";
import mePic from "../images/me pic.jpg"; 

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
        Hello! I'm Michelle! I think I am in the third trimester, but I'm not entirely
        sure — I had to retake one class, then they put me in a class without the correct 
        prerequisite, and there were some scheduling gaps. So… the timeline is a little fuzzy!
      </p>

      <p>
        I enjoy front-end development much more than back-end. 
      </p>

      <p>
        I like basic HTML/CSS/JS because you can actually see what you're creating, 
        and there's so much room to be creative with styling.
      </p>

      <p>
        Ideally, I want a good-paying front-end job.
      </p>

      <p>
        Outside of school, I enjoy camping, hiking (I need to do more!), reading, 
        and doom-scrolling (unfortunately). I also like cooking… 
        but I would definitely appreciate a maid to shop and clean up after me. 😄
      </p>
    </div>
  );
};

export default AboutMe;
