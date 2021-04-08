import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Menu from "./Menu";
import Login from "./Login";
import { useLocation, useHistory } from "react-router-dom";

const App = () => {
  const location = useLocation();
  console.log(location);

  const Name = () => {
    const history = useHistory();

    return (
      <>
        <h1>Hi, i am Name Page</h1>
        <button onClick={() => history.push("/")}>Home</button>
      </>
    );
  };
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" render={() => <About name="About" />} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route
          exact
          path="/service"
          render={() => <Service name={location.pathname.replace("/", "")} />}
        />
        <Route path="/contact/name" component={Name} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default App;
