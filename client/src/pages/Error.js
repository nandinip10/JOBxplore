import React from "react";
import { Link } from "react-router-dom";
import ErrorImg from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  return (
    // full-page=global class that gives 100% of the view port.
    <Wrapper className="full-page">
      <div>
        <img src={ErrorImg} alt="not-found" />
        <h3>oops! page not found</h3>
        <p>We can't seem to find the page you're looking for . . .</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
