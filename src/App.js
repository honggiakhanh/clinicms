import "./App.css";
import NavBar from "./NavigationBar/NavBar";
import LandingPage from "./LandingPage/LandingPage";
import Medicine from "./Medicine/Medicine";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/medicine" exact component={Medicine} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
