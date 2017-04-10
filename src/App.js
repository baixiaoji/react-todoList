import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
       newTodo: "test",
       todoList: [
         {id:1,title: "吃放", status:"completed", deleted:false}
       ]
    }
  }
  render() {

    let todos = this.state.todoList.map((item,index)=>{
        return <li>{item.title}</li>
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo}/>
        </div>
        <ol >
          {todos}
        </ol>
      </div>
    );
  }
}

export default App;
