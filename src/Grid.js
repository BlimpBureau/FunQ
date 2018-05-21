import React from 'react';
import Module from "./GridModule";

const calculateSpacing = (width, depth) => {
  // let gridSize = 1;

  // for (var i = 0; i < depth; i++) {
  //   gridSize = gridSize * 2 + 3;
  // }

  // Sum below is the same as loop above
  // I have discovered a truly remarkable proof of this theorem which this comment is too small to contain.

  let gridSize = 2**((depth)+2) - 3;

  return width/gridSize;
}

const Grid = ({width, height, depth}) => {
  const spacing = calculateSpacing(width, depth);

  const numberOfColumns = 2;
  const numberOfRows = 2;

  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "auto auto",
    gridTemplateRows: "auto auto",
    gridGap: spacing + "px",
    padding: spacing + "px",
    width: "100%",
    height: "100%",
    backgroundColor: depth % 2 ? "white" : "black"
  }

  const effectiveWidth = width - (numberOfColumns + 1) * spacing;
  const effectiveHeight = height - (numberOfRows + 1) * spacing;

  const moduleWidth = effectiveWidth / numberOfColumns;
  const moduleHeight = effectiveHeight / numberOfRows;

  let Item = depth <= 1 ? Module : Grid;
  // let Item = Module;

  return (
    <div style={containerStyle}>
        <Item width={moduleWidth} height={moduleHeight} depth={depth - 1}/>
        <Item width={moduleWidth} height={moduleHeight} depth={depth - 1}/>
        <Item width={moduleWidth} height={moduleHeight} depth={depth - 1}/>
        <Item width={moduleWidth} height={moduleHeight} depth={depth - 1}/>
    </div>
  );
}

export default Grid;
