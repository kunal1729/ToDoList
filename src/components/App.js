import React from "react";
import Form from "./Form.jsx";
import ToDoList from "./ToDoList.jsx";
function App() {
  var [inputText,setInputText] = React.useState("")
  var [todos, setTodos] = React.useState([])
  var [status, setStatus] = React.useState("All")
  var [filteredTodos, setFilteredTodos] = React.useState([])
  const filterTodos = () =>
  {
      if(status === "Completed")
      {
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
      }
      else if(status === "Due")
      {
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
      }
      else
      {
        setFilteredTodos(todos);
      }
  }
  React.useEffect(() => {filterTodos()}, [status, todos]);
  return (
    <div className="App">
      <header>
        <h1>KUNAL'S TO-DO-LIST</h1>
      </header>
      <Form setStatus = {setStatus} todos = {todos} setInputText = {setInputText} setTodos = {setTodos} inputText = {inputText}/>
      <ToDoList todos = {filteredTodos} setTodos = {setTodos} />
    </div>
  );
}

export default App;
