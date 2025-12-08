import React from "react";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import HelpfulResource from "./Components/HelpfulResource.jsx";
import AboutMe from "./Components/AboutMe.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  return (
    <div className="app" style={{ color: "white" }}>
      
      {/* Header */}
      <Header />

      {/* What is React? */}
      <Section title="What is React?">
        <p>
          According to our lesson, “There are many choices of libraries and 
          frameworks, some more comprehensive and 'opinionated' than others. 
          React is more flexible because it focuses solely on rendering and 
          updating the UI based on data and state. It reacts to changes and 
          updates what the user sees.
        </p>

        <p>
          React does not include functionality for routing, API calls, form 
          validation, authentication, or data storage. It relies on external 
          tools like React Router, Axios, and Redux for those tasks.”
        </p>

        <p>Some common tasks React does not handle out of the box:</p>
        <ul>
          <li>Routing</li>
          <li>API calls and data fetching</li>
          <li>Form validation</li>
          <li>Authentication</li>
          <li>Data persistence</li>
        </ul>
      </Section>

      {/* Benefits of React */}
      <Section title="Benefits of React">
        <p>
          “Developers can choose the best tools for these specific needs, 
          such as React Router for routing, Redux or Context for state 
          management, or Axios for API calls.
        </p>

        <p>
          React focuses on doing one thing extremely well: building UI 
          components. Its long history, stability, and compatibility make 
          it a reliable choice for modern front-end development.”
        </p>
      </Section>

      {/* Helpful Resources */}
      <Section title="Helpful Resources">
        <HelpfulResource 
          link="https://react.dev/learn" 
          label="React Official Documentation" 
        />
        <HelpfulResource 
          link="https://www.w3schools.com/react/" 
          label="W3Schools React Tutorial" 
        />
        <HelpfulResource 
          link="https://www.freecodecamp.org/news/get-started-with-react-for-beginners/" 
          label="freeCodeCamp – React for Beginners" 
        />
      </Section>

      {/* About Me */}
      <AboutMe />

      {/* Live Website */}
      <Section title="Live Website">
        <p>
          View my deployed project here:{" "}
          <a 
            href="https://december8.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://december8.netlify.app
          </a>
        </p>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
