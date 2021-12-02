import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="content">
            <Switch>
              <Route exact path="/">
                <About />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
