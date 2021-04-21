import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search";
import Home from "./pages/home";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="container mx-auto px-2">
          <Switch>
            <Route path="/search">
              <Search/>
            </Route>
            <Route path="/">
              <Home/>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
