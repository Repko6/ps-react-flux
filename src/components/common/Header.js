import React from "react";

function Header() {
  return (
    <nav>
      <a href="/">Home</a> | <a href="/courses">Courses</a> |{" "}
      {/* this is non breaking space in JSX */}
      <a href="/about">About</a>
    </nav>
  );
}

export default Header;
