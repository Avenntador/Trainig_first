import './App.css';
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import React from "react";

const App = () => {
  return (
      <div className="wrapper">
        <Header />
        <Navbar />
        <Profile />
      </div>
  );
}

export default App;
