import React from "react";
import day from "../assets/day.svg";
import evening from "../assets/evening.svg";
import night from "../assets/night.svg";

const Greeting = () => {
  const hour = new Date().getHours();

  let imgSrc = day;
  let greetingText = "";

  if (hour >= 6 && hour < 12) {
    greetingText = "Good Morning!";
    imgSrc = day;
  } else if (hour >= 12 && hour < 17) {
    greetingText = "Good Afternoon!";
    imgSrc = day;
  } else if (hour >= 17 && hour < 21) {
    greetingText = "Good Evening!";
    imgSrc = evening;
  } else {
    greetingText = "Good Night!";
    imgSrc = night;
  }

  return (
    <h1 className="greeting">
      <img src={imgSrc} alt="time of day" />
      {greetingText}
    </h1>
  );
};

export default Greeting;
