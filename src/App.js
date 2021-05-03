import './App.css';
import Profile from "./Profile";
import Header from "./Header";
import Content from "./Content";
import React from "react";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Profile />
        <Content />
      </div>
  );
}

export default App;
