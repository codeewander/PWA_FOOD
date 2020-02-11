import React from 'react'
import LogIn from '../src/containers/LogIn'
import Main from '../src/containers/Main'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
// import { Router } from 'react-router-dom'
function App() {
  return (
    <div>
      {/* <LogIn /> */}
      <Router>
        <Main/>
      </Router>
    </div>
  );
}

export default App;
