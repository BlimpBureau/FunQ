import React from 'react';
import Module from "./Module";

const App = ({width, height}) => {
  let spacing = 20;

  const numberOfColumns = width > 1280 ? 3 : (width > 768 ? 2 : 1);

  const containerStyle = {
    display: "flex",
    flexDirection: numberOfColumns > 1 ? "row" : "column",
    width: "100%",
    height: "100%",
    padding: spacing + "px",
    backgroundColor: "#eee",
    overflow: "auto"
  }

  let effectiveWidth = width - (numberOfColumns + 1) * spacing;
  let effectiveHeight = height - 2 * spacing;

  const moduleWidth = effectiveWidth / numberOfColumns;
  const moduleHeight = effectiveHeight;

  const moduleContainerStyle = {
    width: 100 * moduleWidth/effectiveWidth + "%",
    height: 100 * moduleHeight/effectiveHeight + "%",
    marginTop: numberOfColumns > 1 ? 0 : spacing + "px",
    marginLeft: numberOfColumns > 1 ? spacing + "px" : 0
  };

  return (
    <div style={containerStyle}>
     <div style={{...moduleContainerStyle, marginLeft:0, marginTop:0}}>
        <Module width={moduleWidth} height={moduleHeight}/>
      </div>

      <div style={moduleContainerStyle}>
        <Module width={moduleWidth} height={moduleHeight}/>
      </div>

      {(width > 1280) && 
        <div style={moduleContainerStyle}>
          <Module width={moduleWidth} height={moduleHeight}/>
        </div>
      }
    </div>
  );
}

export default App;
