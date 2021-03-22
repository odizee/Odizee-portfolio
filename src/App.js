import React from "react";
//GlobalStyle
import GlobalStyle from "./components/GlobalStyle";

//Import Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ContactPage from './pages/ContactPage';
import Nav from './components/Nav';
//Router
import { Switch, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work">
          <WorkPage/>
        </Route>
        <Route path="/about">
          <AboutPage/>
        </Route>
        <Route path="/contact">
          <ContactPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
