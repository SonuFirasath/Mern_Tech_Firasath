import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  function addTodo() {
    setTodos(() => {
      return [{...todos,task:newTodo,id:uuidv4()}];
    });
    setNewTodo("");
  }
  let updateNewTodo = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="Add a Task"
        value={newTodo}
        onChange={updateNewTodo}
      />
      <button onClick={addTodo}>Add Task</button>
      <br />
      <br />
      <br />
      <br />
      <h3>Tasks Todo</h3>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
