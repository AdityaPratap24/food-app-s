import React from "react";
import { LOGO_CDN_URL } from "../constant";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to='/'>
      <img className="logo" alt="logo" src={LOGO_CDN_URL} />
    </Link>
  );
};

export default Title;
