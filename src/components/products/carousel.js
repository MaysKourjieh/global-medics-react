import React from "react";
import ReactDOM from "react-dom";
import data from "./data.json";

import VerticalCarousel from "./verticalCarousel";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <VerticalCarousel data={data.slides} leadingText={data.leadingText} />
  </React.StrictMode>,
  rootElement
);
