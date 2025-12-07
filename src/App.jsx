import React from 'react';
import Header from "./Components/Header.jsx";
import HelpfulResource from './Components/HelpfulResource.jsx';
import Footer from "./Components/Footer.jsx";


function App() {
  return (
    <div className="app" style={{ color: "white" }}>
      
      <Header />  
      Hello Atlas

      <section>
        <h1>What is React?</h1>
        <p>React is a JavaScript library for building user interfaces...</p>
      </section>

      <section>
        <h1>Benefits of React</h1>
        <ul>
          <li></li>
        </ul>
      </section>

      <section>
        <h1>Helpful Resources</h1>
        <HelpfulResource
          link="https://reactjs.org/docs/getting-started.html"
          label="Official React Documentation"
        />
      </section>
    
     <Footer />   
    </div>
      
  );
}

export default App;
