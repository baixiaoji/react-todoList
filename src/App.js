import React, { Component } from 'react';
import "normalize.css"
import "./reset.css"
import './App.css';
import TodoInput from "./TodoInput"
import TodoItem from "./TodoItem"


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
       newTodo: "",
       todoList: [
         
       ]
    }
  }
  render() {

    let todos = this.state.todoList.map((item,index)=>{
        return (
          <li key={index}>
            <TodoItem todo={item} />
          </li>
        )
    })

    console.log(todos)
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput conetnt={this.state.newTodo} onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol >
          {todos}
        </ol>
      </div>
    );
  }
  addTodo(event){
    this.state.todoList.push({
      id: idMaker(),
      title: event.target.value,
      statue: null,
      deleted: false
    })

    this.setState({
      newTodo: "",
      todoList: this.state.todoList
    })
  }
}

export default App;

let id = 0;

function idMaker(){
  id +=1
  return id
}