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
import { Switch, Route, useLocation } from "react-router-dom";
//Animation
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter> 
        <Switch location={location} key={location.pathname}>
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
      </AnimatePresence>
    </div>
  );
}

export default App;
