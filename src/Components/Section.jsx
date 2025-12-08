import React from "react";

const Section = ({ title, children }) => {
  return (
    <div className="section">
      <h1>{title}</h1>
      {children}
    </div>
  );
};

export default Section;
export const SectionsContent = () => {

<><Section title="What is React?">
    <p>
        According to our lesson, “There are many choices of libraries and frameworks,
        some more comprehensive and 'opinionated' than others. React is more flexible
        than many of these frameworks because it only renders and updates the UI based
        on data and application state. It reacts to changes and updates what the user sees.
        This also means that React has no functionality or opinions on other common tasks,
        such as requesting data from a Web API. It will use the data we provide to build
        visual components but is not concerned with how the other layers perform their tasks.
    </p>

    <p>Some common tasks that React doesn't handle out of the box include:</p>

    <ul>
        <li>Routing (managing how the user navigates to different pages/views)</li>
        <li>API calls and data fetching</li>
        <li>Form validation</li>
        <li>Authentication (logging in to a system)</li>
        <li>Data persistence (ex: working with a database)</li>
    </ul>
</Section><Section title="The Benefits of React">
        <p>
            According to our lesson, “Developers can choose the best tools for these
            specific needs, such as React Router for routing, Redux or Context for state
            management, or Axios for API calls. Think of React as a highly specialized
            tool that does one thing extremely well, rather than trying to solve every
            problem. React's long history, stability, and compatibility have made it a
            reliable library for front-end application development.”
        </p>
    </Section></>

};