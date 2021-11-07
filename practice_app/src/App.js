import React from 'react';
import './App.css';
import Welcome from "./Components/Welcome";
import StatePractice from "./Components/StatePractice";
import MOreStatePrac from './Components/MoreStatePrac';
import DemoPage from './pages/DemoPage';
import StatePracPage from './pages/StatePracPage';
import SignUp from './Components/SignUp';
import ArrayMap from './Components/ArrayMap';
import JsonArray from './Components/JsonArray';
import { BrowserRouter, HashRouter } from "react-router-dom";
import AppRoute from "./route/AppRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <SignUp /> */}
        {/* <ArrayMap/> */}
        {/* <JsonArray />
      <DemoPage />
      <MOreStatePrac /> */}
        <AppRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
