import { useState } from "react";



export function MyToDoList () {
    const [task, setTask] = useState("");
    const [list , setList]= useState ([]);
    
            return ( <div className="todoapp stack-large">
                <form onSubmit={e => { e.preventDefault();}}>
                  <h2 className="label-wrapper">
                    <label htmlFor="new-todo-input" className="label__lg">
                      What needs to be done?
                    </label>
                  </h2>
                  <input value={task}
                    onChange={(ev) => {
                        setTask(ev.target.value);
                    }}
                    onKeyDown={(ev)=>{
                        if (ev.key === "Enter"){
                            const newList = [{ "task": task, "done": false},...list,];
                            setList(newList);
                            //Add the task to the list
                        }}}
                  />
                  
                  <button type="submit" className="btn btn__primary btn__lg btn-light">Add
                  </button>
                </form>
                <div className="filters btn-group stack-exception">
                  <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden"> task</span>
                  </button>
                  <button type="button" className="btn toggle-btn btn-primary" aria-pressed="false">
                    <span className="visually-hidden">Show </span>
                    <span>Active</span>
                    <span className="visually-hidden"> task</span>
                  </button>
                  <button type="button" className="btn toggle-btn btn-info" aria-pressed="false">
                    <span className="visually-hidden ">Show </span>
                    <span>Completed</span>
                    <span className="visually-hidden"> task</span>
                  </button>
                </div>
                
                <ul
                  role="list"
                  className="todo-list stack-large stack-exception"
                  aria-labelledby="list-heading">
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
              
                     {list.map(
                        
                      (item,index) => {
                          return (<li key={index}>  <input id="todo-2" type="checkbox" /> {item.task}  </li>)
                        })}
                     
                </ul>
              </div>
            );
          }
          