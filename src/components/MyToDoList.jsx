import { useEffect, useState } from "react";
import { useTodoList } from "./services/useTodoList";

export function MyToDoList() {
  const todo = useTodoList();

  useEffect(() => {
   todo.getTodosFromAPI();
},[]);

  return (
    <div className="todoapp stack-large">
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        value={todo.task}
        type={"text"}
        onChange={(e) => {
          todo.changeTask(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            todo.addTask();
          }
        }}
      />

      <button
        type="button"
        onClick={() => {
          todo.addTask();
        }}
        className="btn btn__primary btn__lg btn-light"
      >
        Add
      </button>


      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              Eat
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              Sleep
            </label>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              Feed the Dog
            </label>
          </div>
        </li>

        {todo.list.map((item, index) => {
          if (item.done) return null;
          return (
            <li key={item.label}>
              {" "}
              <input id="todo-2" type="checkbox" /> {item.label}{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
