import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PlayerProfile from "./pages/PlayerProfile";
import SearchResults from "./pages/SearchResults";
import "./scss/App.scss";
function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="app-margin-wrapper">
          <Switch>
            <Route path="/search/:q">
              <SearchResults />
            </Route>
            <Route path="/profile/:account_id">
              <PlayerProfile />
            </Route>
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
