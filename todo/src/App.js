import { Todo } from './Todo';

const myTodoList = [{
  task: 'Clean your room',
  createdby: 'Mummy',
  assignedTo: 'Tom',
},
{
  task: 'Take out the trash',
  createdby: 'Mummy',
  assignedTo: 'Daddy',
}]

function App() {

  return (
    <div>
      <h1>To Do</h1>
      <Todo tasts={myTodoList}/>
    </div>
    
  );
}

export default App;
