import React from 'react';
import Grid from "./Grid";

const App = ({width, height}) => {

  const containerStyle = {
  	display: "flex",
  	alignItems: "center",
  	justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "#000"
  }

  let moduleWidth = Math.min(width, height);
  let moduleHeight = Math.min(width, height);

  const moduleContainerStyle = {
    width: 100 * moduleWidth/width + "%",
    height: 100 * moduleHeight/height + "%",
  };

  return (
    <div style={containerStyle}>
    	<div style={moduleContainerStyle}>
        	<Grid width={moduleWidth} height={moduleHeight} depth={4}/>
        </div>
    </div>
  );
}

export default App;
