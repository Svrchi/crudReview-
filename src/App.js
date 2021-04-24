/* eslint-disable react/react-in-jsx-scope */
import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
const [form, setForm] = useState('');

const handleChange = (e) => {
  e.preventDefault();
  setForm(e.target.value);
}

const submit = (e) => {
  console.log("test button and input state:", form)
  fetch(`http://localhost:8080/api/testDB`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(
        {
        form
        },
      ),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  };



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <input 
    className="input"
    type="text"
    placeholder="this is a test input"
    onChange = {(e) => handleChange(e)}
    >
    </input>
    <button
    type="submit"
    onClick = {(e) => submit(e)}
    >
      submit 
    </button>
      </header>
    </div>
  );
}

export default App;
