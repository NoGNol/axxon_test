import React from "react";
import { render, unmountComponentAtNode } from "react-dom";

import "./styles.css";
import App from "./App";

const rootElement = document.getElementById("root");
render(<App />, rootElement);

// setTimeout(() => {
//     unmountComponentAtNode(rootElement);
// }, 500)
// для проверки mounted - unmounted (DataProvider)