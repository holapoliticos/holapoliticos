import "./styles.css"
import React from "react"
import { Switch, Route } from "react-router-dom-animation"
import Hello from "./pages/home.js"
import Politicians from "./pages/about.js"

const animationProps = {
  style: {
    width: "100%",
    height: "100vh",
    position: "absolute"
  },
  initial: {
    default: { y: "0px" },
    prev: { y: "-100vh" },
    next: { y: "100vh" }
  },
  animate: { y: "0px" },
  exit: {
    prev: { y: "-100vh" },
    next: { y: "100vh" }
  },
  transition: { duration: 0.6 }
}

const App = () => {
  return (
    <Switch>
      <Route {...animationProps} path="/" exact component={Hello} />
      <Route {...animationProps} path="/2" component={Politicians} />
    </Switch>
  )
}

export default App
