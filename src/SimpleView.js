import React from 'react';
import Module from "./Module";
import { SPACING } from "./Constants";

const SimpleExample = ({width, height}) => {
  const numberOfColumns = width > 1280 ? 3 : (width > 768 ? 2 : 1);

  const containerStyle = {
    display: "flex",
    flexDirection: numberOfColumns > 1 ? "row" : "column",
    width: "100%",
    height: "100%",
    padding: SPACING + "px",
    backgroundColor: "#eee",
    overflow: "auto"
  }

  let effectiveWidth = width - (numberOfColumns + 1) * SPACING;
  let effectiveHeight = height - 2 * SPACING;

  const moduleWidth = effectiveWidth / numberOfColumns;
  const moduleHeight = effectiveHeight;

  const moduleContainerStyle = {
    width: 100 * moduleWidth/effectiveWidth + "%",
    height: 100 * moduleHeight/effectiveHeight + "%",
    marginTop: numberOfColumns > 1 ? 0 : SPACING + "px",
    marginLeft: numberOfColumns > 1 ? SPACING + "px" : 0
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

export default SimpleExample;
