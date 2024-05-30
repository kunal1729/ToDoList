import React from "react";
function ToDoItem({completed, id, text, todos, setTodos})
{
    function deleteHandler()
    {
        setTodos(todos.filter((entry) => entry.id !== id))
    }
    
    function completeHandler()
    {
        setTodos(todos.map(function(todo)
        {
            if(todo.id === id)
            {
                todo.completed = !completed
                return todo
            }
            return todo
        }))
        
    }

    return <div className="todo">
        <li class = "todo-item">{text}</li>
        <button onClick={completeHandler} className="complete-btn">✅︎</button>
        <button onClick={deleteHandler} className="trash-btn">❌</button>
    </div>

}

export default ToDoItem;