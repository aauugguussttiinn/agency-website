import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from 'pages/Home/Home';
import About from 'pages/About/About';
import Works from 'pages/Works/Works';
// import NotFound from 'pages/NotFound/NotFound';
import { ThemeContext } from "Context/ThemeContext";

const App = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <BrowserRouter>
      <Switch>
          <div className={ theme ? "maintheme tolight" : "maintheme todark" }>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/works" exact component={Works} />
            {/* <Route component={NotFound} /> */}
          </div>
      </Switch>
    </BrowserRouter>
  );
};

export default App;