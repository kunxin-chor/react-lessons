import React from 'react';
import logo from './logo.svg';
import './App.css';

import MessageBox from "./components/MessageBox"

function App() {
  return (
    <>
        <MessageBox text="Merry Christmas"/>
        <div className="content"> 
            <h1>Hello World</h1>
            <p>The quick brown fox jumps over the lazy dog</p>

        </div>
        <div>
            Hello again
        </div>
    </>
  );
}

export default App;
