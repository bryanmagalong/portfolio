import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './containers/Navbar';
import ContentWrapper from './components/ContentWrapper';
import Projects from './components/Projects';
import Skillset from './containers/Skillset';
import Home from './components/Home';
import Contact from './components/Contact.js';
import './App.css';
import ScrollToTop from './components/ScrollToTop.js';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <ContentWrapper>
          <Switch>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/skillset">
              <Skillset />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </ContentWrapper>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
