import React from "react";
// Using the code in the [HelloDiv.js](Unsolved/src/components/HelloDiv.js) file as a starting point, update the `HelloDiv` function so that it returns the following JSX:

//   * A heading tag introducing yourself, e.g., `<h1>Hello! My name is <insert name here></h1>`.

//   * An unordered list containing at least 3 things you like (these can be anything).
const HelloDiv = () => {
    const name = "Zelalem"
  return (
    <div>
      <h1>Hello! My name is {name}</h1>
      <ul>
        <li>This is REACT crash course</li>
        <li>MERN stands for MongoDB, Express, React, Node </li>
        <li>REACT is a javaScript library</li>
      </ul>
    </div>
  );
};

export default HelloDiv;
