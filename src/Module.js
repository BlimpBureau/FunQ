import React from "react";

const Module = ({ width, height }) => {
  const containerStyle = {
    width: "100%",
    height: "100%",
    backgroundColor:
      width > 500 ? "#40c057" : width > 300 ? "#fcc419" : "#fa5252"
  };

  return <div style={containerStyle} />;
};

export default Module;
