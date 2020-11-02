import React from "react";
import {NavLink} from "react-router-dom";
import './App.css';
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="">Microblog</h1>
        <nav>
          <NavLink exact to="/">Blog</NavLink>
          <NavLink exact to="/new"> New Post</NavLink>
        </nav>
        </header>
        <Routes />
    </div>
  );
}

export default App;
