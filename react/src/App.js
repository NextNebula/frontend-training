import "./App.css";
import Header from "./components/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./pages/search";
import Subscriptions from "./pages/subscriptions";
import Podcast from "./pages/podcast";
import { EpisodeContextProvider } from "./contexts/episodeContext"

function App() {
  return (
    <div className="App">
      <EpisodeContextProvider>
        <Router>
          <Header/>
          <div className="container mx-auto px-2">
            <Switch>
              <Route path="/search">
                <Search/>
              </Route>
              <Route path="/podcast/:id">
                <Podcast/>
              </Route>
              <Route path="/">
                <Subscriptions/>
              </Route>
            </Switch>
          </div>
        </Router>
      </EpisodeContextProvider>
    </div>
  );
}

export default App;
