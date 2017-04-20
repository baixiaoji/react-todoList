import React, {Component } from "react"
import "./TodoItem.css"
export default class TodoItem extends Component{
    render(){
        return (
            <div className="item">
                <input type="checkbox" className="toggle" checked={this.props.todo.status === "completed"}
                onChange={this.toggle.bind(this)}/>
                <span> {this.props.todo.title} </span>
                <button onClick={this.deleted.bind(this)}>x</button>
            </div>
        )
    }
    toggle(e){
        this.props.onToggle(e,this.props.todo)
    }
    deleted(e){
        this.props.onDeleted(e,this.props.todo)
    }
}