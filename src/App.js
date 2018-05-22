import React, { Component } from 'react';
import SimpleView from "./SimpleView";
import GridView from "./GridView"
import CloseButton from "./CloseButton";

const VIEWS = {
  NAVIGATION: 0,
  SIMPLE: 1,
  COMPLEX: 2
}

const SPACING = 20;

const Nav = ({actions}) => {
  const navStyle = {
    listStyle: "none",
    display: "block",
    width: "100%",
    textAlign: "center"
  }

  const navItem = {
    display: "block",
    width: "100%",
    textAlign: "center",
    padding: SPACING + "px"
  }

  const buttonStyle = {
    display: "inline-block",
    width: "30%",
    minWidth: "200px",
    padding: SPACING + "px",
    fontSize: "20px",
    fontWeight: "bold",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    backgroundColor: "transparent",
    color: "white",
    border: "2px solid white",
    cursor: "pointer"
  }

  const navButtons = Object.keys(VIEWS).map((view, index) => {
    return <li key={index} style={navItem}><button style={buttonStyle} onClick={ event => {actions.navigate(index)}}>{view}</button></li>
  });

  return (
    <ul style={navStyle}>
      {navButtons.slice(1)}
    </ul>
  )
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentView: VIEWS.NAV
    };

    this.navigate = (index) => {
      this.setState({
        currentView: index
      });
    };

    this.actions = {
      navigate: this.navigate
    };
  }

  render() {
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

    if(this.state.currentView === VIEWS.SIMPLE) {
      View = SimpleView;
    } else if(this.state.currentView === VIEWS.COMPLEX) {
      View = GridView;
    } else {
      View = Nav;
    }

    let closeButtonStyle = {
      position: "fixed",
      top: "20px",
      right: "20px"
    }

    const Close = <CloseButton onClick={event => {this.navigate(VIEWS.NAV)}} style={closeButtonStyle} />;

    return (
      <div style={containerStyle}>
        {this.state.currentView !== VIEWS.NAV && Close}
        <View width={this.props.width - 2 * SPACING} height={this.props.height - 2 * SPACING} actions={this.actions} />
      </div>
    );
  }
}

export default App;
