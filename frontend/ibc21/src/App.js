import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import AllReports from "./components/AllReports";
import ReportForm from "./components/ReportForm";
import Map from "./components/Map";
import TakePhoto from "./components/TakePhoto";
import CloudApp from "./components/CloudApp";

import logo from "./logo.svg";
import "./App.css";

function App() {
  
  return (
    <>
    
      <div className="App" >
        <div className="App-logo">
          <img src={logo} alt="ibc" />
        </div>
        <Header />
        {/* <TakePhoto /> */}
        <CloudApp />
        <div><ReportForm /></div>
          <div><AllReports /></div> 
        <div><Map /></div>
      </div>
      
    </>
  );
}
export default App;
