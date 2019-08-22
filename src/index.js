import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import reducer from "./store/reducer";
import { createStore } from "redux";

const store = createStore(reducer);

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
