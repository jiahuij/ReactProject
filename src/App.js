import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons:[
      {name:"John", age:23},
      {name:"Aaron", age:25},
      {name:"Zihao", age:24},
    ]
  }

 btnNameHandler = () =>{

  // console.log("clicked");
    this.setState({persons:[
      {name:"John", age:213},
      {name:"Aaron", age:225},
      {name:"Zihao", age:234},
    ]
  })
 }

  render() {
    return (
      <div className="App">
        <h1> Hi, I'am a React App</h1>  
        <button onClick={this.btnNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>Hobbie: Gaming</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>Hobbie: Gaming</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbie: Gaming</Person>
      </div>
    );
  }
}

export default App;
