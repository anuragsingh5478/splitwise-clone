import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import useToken from "./useToken";
import Homepage from "./components/homepage/Homepage";
import Navbar from "./components/navbar/Navbar";
import Profile from "./profile/Profile";

function App() {
  const { token, setToken, logout } = useToken();

  if (!token) {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/login">
              <Login setToken={setToken} />
            </Route>
            <Route path="/register">
              <Register setToken={setToken} />
            </Route>
            <Redirect to="/login" />
          </Switch>
        </div>
      </Router>
    );
  }
  return (
    <Router>
      <div className="App">
        <Navbar logout={logout} />

        <Switch>
          <Route path="/homepage">
            <Homepage />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Redirect to="/homepage" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
