import React from "react";
import ReactDOM from "react-dom";
import {state, actions} from "./Store";
import "./index.css";
import App from "./App";
import throttle from "lodash.throttle";

const render = (s = state.getData(), x = actions, w = window.innerWidth, h = window.innerHeight) => {
  ReactDOM.render(
    <App state={s} actions={x} width={w} height={h} />,
    document.getElementById("root")
  );
};

const throttledRender = throttle(render, 1000/60); // 60 FPS
state.connect(throttledRender);
window.addEventListener("resize", () => { throttledRender() } );