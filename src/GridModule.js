import React from "react";

const Module = ({ width, height, depth }) => {
  const containerStyle = {
    backgroundColor: depth % 2 ? "white" : "black"
  };

  return <div style={containerStyle} />;
};

export default Module;
