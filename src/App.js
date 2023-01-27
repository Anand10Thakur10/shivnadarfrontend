import './App.css';
import Navbar from './component/Navbar';
import Main from './component/Main';
import React from "react";
import Buis from './component/Buis';
import Client from './component/Client';
import Dropdown from './component/Dropdown';
import { BrowserRouter as Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <>
      <style>{'body { background-color: #d3de0d4f; }'}</style>
      
     {/* <Router>
        <Routes>
        <Route path="/">
            <Navbar />
            <Main/>
          </Route>
          <Route path="/Business">
            <Buis />
          </Route>
          <Route path="/Client">
            <Client />
          </Route>
          
        </Routes>
  </Router>
<Navbar/>
<Main/>*/}
{/*<Dropdown/>*/}
<Client/>
    
      </>
      </div>
      
  
  );
}

export default App;
