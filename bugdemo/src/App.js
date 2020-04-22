import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";
import './App.css';

const NavMenu = () => {
  const handleClick = ev => {
    console.log("Do anything or nothing");
  };
  useEffect(() => {
    document.querySelector("body").addEventListener("click", handleClick);
    return () => {
        document.querySelector('body').removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <nav>
      <Link to="/">To A</Link>
      <Link to="/b">To B</Link>
    </nav>
  );
};

const A = () => {
  return (
    <div>
      <h1>Page A</h1>
      <Link to="/b">To B</Link>
    </div>
  );
};

const B = () => {
  return (
    <div>
      <h1>Page B</h1>
      <Link to="/">To A</Link>
    </div>
  );
};

const Sidebar = () => {
  const [data, setData] = useState("Boring default data");

  const vitalProcess = ev => {
    setData("Valuable results of calculations");
  };

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={vitalProcess}>Click Me</button>
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <div className="main">
        <Switch>
          <Route path="/" component={A} />
          <Route path="/b" component={B} />
        </Switch>
      </div>
      <Sidebar />
    </div>
  );
}
