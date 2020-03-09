import React, { Component } from 'react';
import Person from './Person/Person.js'
import './App.css';


class App extends Component {
  state={
    persons:[
      {name: 'Zana', age: 22},
      {name: 'Blerta', age: 29},
    ],
    showPersons: false
  }
  switchNameHandler = (NewName) =>{
    this.setState({
      persons:[
        {name: NewName, age: 22},
        {name: 'Blerta', age: 29},
      ]
      
    })
  }
  nameChangedHandler = (event) => {
    this.setState({
      persons:[
        {name: 'Zana', age: 22},
        {name: event.target.value, age: 29},
      ]
    })
  }
  toggelPersonsHandler=() => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }
  render(){
    const style={
      backgraundColor:'white',
      font:'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer'
    };

    let persons = null;
    if(this.state.showPersons){
      persons=(
        <div>
          <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Zana!')}/>
          <Person
          name = {this.state.persons[1].name}
          age = {this.state.persons[1].age}
          changed={this.nameChangedHandler}>My Hobbies: Reading</Person>

        </div>
      )

    
  }
  
  
  return (
    <div className="App">
      <button style={style}
      onClick= {this.toggelPersonsHandler}>Toggle Persons</button>
      {persons}
    </div>
  );
}
}

export default App;
