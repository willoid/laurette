import {lauretteContext} from "./context";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {

  const [isLogged, setIsLogged] = useState(false);

  return (
    <lauretteContext.Provider value={{isLogged, setIsLogged}}>
      <Router></Router>
    </lauretteContext.Provider>
  );
}

export default App;
