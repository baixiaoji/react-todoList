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
       newTodo: "test",
       todoList: [
         {id:1,title: "吃放", status:"completed", deleted:false},
         {id:1,title: "睡觉😴", status:"completed", deleted:false}
       ]
    }
  }
  render() {

    let todos = this.state.todoList.map((item,index)=>{
        return (
          <li>
            <TodoItem todo={item} />
          </li>
        )
    })
    return (
      <div className="App">
        <h1>我的代办</h1>
        <div className="inputWrapper">
          <TodoInput conetnt={this.state.newTodo} onSubmit={this.addTodo} />
        </div>
        <ol >
          {todos}
        </ol>
      </div>
    );
  }
  addTodo(){
    console.log("我要添加一个todo了")
  }
}

export default App;
