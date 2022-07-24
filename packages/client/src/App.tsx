import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [result, setResult] = useState("calling api ...");
  useEffect(() => {
    (async () => {
      const res = await fetch("/api/ping");
      setResult(`API result: ${await res.text()}`);
    })();
  }, [setResult]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!
        </a>
        <br />
        {result}
      </header>
    </div>
  );
}

export default App;
