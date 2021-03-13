import {lauretteContext} from "./context";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from "./components/Landing"
import Login from "./components/Login"
import Main from "./components/Main"
import GlobalStyle from "./styledComponents/GlobalStyle";
import Card from "./components/Card"
import Bonus from "./components/Bonus"
import Infos from "./components/Infos"
import Laurette from "./components/Laurette"

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <lauretteContext.Provider value={{isLogged, setIsLogged}}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/main" exact>
            <Main />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/card" exact>
            <Card />
          </Route>
          <Route path="/bonus" exact>
            <Bonus />
          </Route>
          <Route path="/infos" exact>
            <Infos />
          </Route>
          <Route path="/laurette" exact>
            <Laurette />
          </Route>
        </Switch>
      </Router>
    </lauretteContext.Provider>
  );
}

export default App;
