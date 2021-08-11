import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ThemeContextProvider from 'Context/ThemeContext';
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Works from 'pages/Works/Works';
import NotFound from 'pages/NotFound/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ThemeContextProvider>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          {/* <Route component={NotFound} /> */}
        </ThemeContextProvider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;