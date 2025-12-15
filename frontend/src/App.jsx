import React from 'react';
import './App.css';
import Desk from './components/Desk.jsx';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Word Management App</h1>
      </header>
      <main>
        <Desk />
      </main>
    </div>
  );
};

export default App;