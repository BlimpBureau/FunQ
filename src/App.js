import React from 'react';

import Nav from "./Nav";
import SimpleView from "./SimpleView";
import GridView from "./GridView"
import CloseButton from "./CloseButton";
import { VIEWS, SPACING } from "./Constants";

const App = ({state, actions, width, height}) => {
  const containerStyle = {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    padding: SPACING + "px",
    backgroundColor: "#000",
    overflow: "auto"
  }

  let View;

  if(state.currentView === VIEWS.SIMPLE) {
    View = SimpleView;
  } else if(state.currentView === VIEWS.COMPLEX) {
    View = GridView;
  } else {
    View = Nav;
  }

  let closeButtonStyle = {
    position: "fixed",
    top: "20px",
    right: "20px"
  }

  const Close = <CloseButton onClick={event => {actions.navigate(VIEWS.NAV)}} style={closeButtonStyle} />;

  // <View {...{state, actions, width: width -2*SPACING, height: height - 2*SPACING}} />

  return (
    <div style={containerStyle}>
      {state.currentView !== VIEWS.NAV && Close}
      <View state={state} actions={actions} width={width - 2 * SPACING} height={height - 2 * SPACING} />
    </div>
  );
}

export default App;
