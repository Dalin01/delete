import { useState } from "react";

export function Todo(props) {

  let myTasks = props.tasts;

  let [tasks, setTasks] = useState(myTasks);
  let [newTask, setNewTask] = useState('');
  let [createdby, setcreatedby] = useState('');
  let [assignedTo, setassignedTo] = useState('');

  function setTodoItem(value, index) {
    return (
    <div key={index}>
      <p>Task: {value.task}</p>
      <p>Created by: {value.createdby}</p>
      <p>Assigned to: {value.assignedTo}</p>
      <hr />
    </div>
    )
  }

  function AddTask(event) {
    setNewTask(event.target.value)
  }

  function CreatedBy(event) {
    setcreatedby(event.target.value)
  }
  function AssignedTo(event) {
    setassignedTo(event.target.value)
  }

  function submit() {
    const newObject = {
      task: newTask,
      createdby: createdby,
      assignedTo: assignedTo,
    }

    setTasks([...tasks, newObject])
  }

  return (

    <div>

      {
        tasks.map(setTodoItem)
      }

      Task: <input type='text' value={newTask} style={{margin: '5px'}} onChange={AddTask}/> <br />
      Created By: <input type='text' value={createdby}  style={{margin: '5px'}} onChange={CreatedBy}/> <br />
      Assigned To: <input type='text' value={assignedTo}  style={{margin: '5px'}} onChange={AssignedTo}/> <br />
      <button  style={{margin: '5px'}} onClick={submit}>Add new task</button>
    </div>

  )
}



