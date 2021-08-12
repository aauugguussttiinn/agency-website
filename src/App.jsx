import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Works from 'pages/Works/Works';
import Work from 'components/Work/Work';
import NotFound from 'pages/NotFound/NotFound';
import { ThemeContext } from "Context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <div className={ theme ? "maintheme tolight" : "maintheme todark" }>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/works" exact component={Works} />
          <Route path="/works/:workSlug" exact component={Work} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;