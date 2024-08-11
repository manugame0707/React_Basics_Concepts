import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);
    let [newtodo, setNewTodo] = useState("");
    let addNewTask = () => {
        setTodos([...todos, { task: newtodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };
    let updateTodovalue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    };
    let markAllDone = () => {
        setTodos((todos) => todos.map((todo) => {
            return { ...todo, isDone: true };
        }));
    };
    let markOneDone = (id) => {
        setTodos((todos) => todos.map((todo) => {
            if (todo.id == id) {
                return { ...todo, isDone: true };
            } else {
                return todo;
            }

        }));
    };
    return (
        <div>
            <input type="text" placeholder="Add a task" value={newtodo} onChange={updateTodovalue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br /><br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {
                    todos.map((todo) =>
                    (
                        <li key={todo.id}>
                            <span style={todo.isDone ? { textDecorationLine: "line-through" } : {}}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            <button onClick={() => markOneDone(todo.id)}>Mark As Done</button>
                        </li>
                    )
                    )
                }

            </ul>
            <br /><br />
            <button onClick={markAllDone}>Mark All As Done</button>
        </div>
    )

}