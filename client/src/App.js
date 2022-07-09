import React from 'react';
import './App.css';
import Header from './components/Header';
import AcceptMaxFiles from './pages/uploadPhoto';

function App() {
  return (
    
    <div className="App">
      <Header> </Header>
      <AcceptMaxFiles />
    </div>
  
  );
}

export default App;