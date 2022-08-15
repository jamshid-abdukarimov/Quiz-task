import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Link to="/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
