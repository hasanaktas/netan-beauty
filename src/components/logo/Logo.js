import React from "react";

const Logo = (props) => {
  return (
    <img
      alt="Logo"
      src="static/images/marketplace/hepsiburada.png"
      style={{ height: 40, width: "auto" }}
      {...props}
    />
  );
};

export default Logo;
