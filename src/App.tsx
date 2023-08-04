import React, {useState} from 'react';
import './App.css';

function App() {
    const [taskList,setTaskList] = useState(Array<string>);
    const [value,setValue]=useState('');

  return (
      <>
        <h1 className={"text-center p-2"}>Simple Task App</h1>
          <div className={"d-flex p-2 gap-2"}>
              <input value={value} onInput={(e)=>{
                  setValue((e.target as HTMLInputElement).value)
              }} className={"form-control"} type="text" placeholder={"Enter Task"}/>
              <button className={"btn btn-primary"} onClick={()=>{
                setTaskList([...taskList,value]);
              }}>ADD</button>
          </div>
          <div>
              {taskList.map((task)=><div className={'p-2 m-2'}>{task}</div>)}
          </div>
      </>
  );
}

export default App;