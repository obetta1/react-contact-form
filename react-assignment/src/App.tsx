import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserContactFom from './component/userInput';

function App() {
 const [input, setInput] = useState({
   firstName:''
 })

  return (
    <div className="App">
      <UserContactFom/>
    </div>
  );
}

export default App;
