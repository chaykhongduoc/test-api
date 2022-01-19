import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import Product from "./pages/Product";
import Login from "./pages/Login";
import TodoList from "./pages/TodoList";

function App() {
  return <AppRoute />;
}

export default App;

const AppRoute = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/weather">
          <Weather />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/todos">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
};
