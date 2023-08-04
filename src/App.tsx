import React, {useState} from 'react';
import './App.css';
import {Task} from "./Task";

function App() {
    const [taskList,setTaskList] = useState<Array<string>>([]);
    const [value,setValue]=useState<string>('');

  return (
      <>
        <h1 className={"text-center p-2"}>Simple Task App</h1>
          <form action="#">
              <div className={"d-flex p-2 gap-2"}>
                  <input value={value} onInput={(e) => {
                      setValue((e.target as HTMLInputElement).value)
                  }} className={"form-control"} type="text" placeholder={"Enter Task"}/>
                  <button className={"btn btn-primary"} onClick={() => {
                      setTaskList([...taskList, value]);
                  }}>ADD
                  </button>
              </div>
          </form>
          <div className={'mt-2'}>
              {taskList.map((task)=><Task desc={task}/>)}
          </div>
          {!taskList.length && <div className={'text-center p-2'}>No Task Available</div>}
      </>
  );
}

export default App;