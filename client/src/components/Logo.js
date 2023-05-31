import React from "react";
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      src={logo}
      width="200px"
      height="70px"
      alt="JOBxplore"
      className="logo"
    />
  );
  // return <div>logo</div>;
};

export default Logo;
