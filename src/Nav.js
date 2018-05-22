import React from 'react';
import { VIEWS, SPACING } from "./Constants";

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

export default Nav;