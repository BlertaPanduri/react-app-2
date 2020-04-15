import React, { Component } from 'react';
import './App.css';
import Voting from './Voting/Voting.js';

class App extends Component{
  render() {
    const ListOfNumbers = [1,2,3];
  return (
    <div className="App">
      <Voting/>
    </div>
  );
}
}

export default App;
