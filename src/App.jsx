import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Work from "./components/Work";
import useLocoScroll from "./hooks/useLocoScroll";
import "./styles/main.scss";

function App() {
  useLocoScroll();

  return (
    <div id="app">
      <Navbar />
      <Header />
      <Work />
    </div>
  );
}

export default App;
