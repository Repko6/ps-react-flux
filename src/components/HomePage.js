import React from "react"; //import npm package 'react' to variable React
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight administration</h1>
      <p>React, Flux and React Router for ultra-responsive web apps.</p>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage; // if it's default export then import needs less code to import and file who is doing import can decide how to name that import
