import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LandingPage from './components/views/LandgingPage/LandingPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import Footer from './components/views/Footer/Footer';
import NavBar from './components/views/NavBar/NavBar';



function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/Login">
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;


function Home() {
  return (
    <div>
      <h2>안녕하세요</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
