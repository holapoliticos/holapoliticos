import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom-animation"

import App from "./App"

const rootElement = document.getElementById("app")
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
)
