import React from "react";
import ToDoItem from "./ToDoItems";

function ToDoList({todos, setTodos})
{
    return <div className="todo-container">
        <ul className = "todo-list">
            {todos.map((todo) => (<ToDoItem completed = {todo.completed} text = {todo.text} id ={todo.id} key = {todo.id} todos = {todos} setTodos = {setTodos} />))}
        </ul>
    </div>;
}

export default ToDoList;