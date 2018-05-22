import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ResizeObserver from "resize-observer-polyfill";
import throttle from "lodash.throttle";

const render = (width, height) => {
  ReactDOM.render(
    <App width={width} height={height} />,
    document.getElementById("root")
  );
};

const throttledRender = throttle(render, 50);

const ro = new ResizeObserver((entries, observer) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;

    throttledRender(width, height);
  }
});

ro.observe(document.body);

// window.addEventListener("resize", () => {
// 	render(window.innerWidth, window.innerHeight);
// });

render(window.innerWidth, window.innerHeight);
