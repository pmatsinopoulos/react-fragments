import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeadColumns from "./HeadColumns.jsx";
import BodyColumns from "./BodyColumns.jsx";

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <HeadColumns/>
          </tr>
        </thead>
        <tbody>
          <tr>
            <BodyColumns/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
