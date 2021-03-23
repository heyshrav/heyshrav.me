import React from "react";
import "./App.css";
import "./index.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <video src="https://vod-progressive.akamaized.net/exp=1616511677~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F1410%2F14%2F357054544%2F1457269714.mp4~hmac=71a621de27ef114a41cfb19720182c5a54b70851d1416c69a877952867393b09/vimeo-prod-skyfire-std-us/01/1410/14/357054544/1457269714.mp4" className="bg_vid" autoPlay muted controls loop/>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
