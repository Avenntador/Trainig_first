import './App.css';
import Profile from "./components/Profile";
import Header from "./components/Header";
import Content from "./components/Content";
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
