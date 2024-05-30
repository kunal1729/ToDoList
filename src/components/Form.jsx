import React from "react";

function Form({setStatus, todos, setInputText, setTodos, inputText})
{
    function inputTextHandler(event)
    {
        setInputText(event.target.value)
    }
    function allowText(event)
    {
        if(event.key >= '0' && event.key <= '9')
        {
            alert("Only characters allowed !")
            event.preventDefault()
        }
    }
    function submitTodoHandler(event)
    {
        event.preventDefault();
        setTodos([...todos, {text : inputText, completed : false, id : Math.random() * 100}]);
        setInputText("");
    }
    function statusHandler(event)
    {
        setStatus(event.target.value)
    }
    return <form onSubmit={submitTodoHandler}>
        <input onKeyDown={allowText} value = {inputText} type = "text" onChange={inputTextHandler} className = "todo-input" placeholder="Write a task." />
        <button className="todo-button" type="submit">+</button>
        <select onChange = {statusHandler} name = "todos" className="filter-todo">
            <option value = "All">All</option>
            <option value = "Completed" >Completed</option>
            <option value = "Due">Due</option>
        </select>
    </form>;
}

export default Form;