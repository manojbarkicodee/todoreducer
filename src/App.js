import './App.css';
import Todo from './components/Todo';
import Todolist from './components/Todolist';
import { TodoProvider } from './context/TodoContext';

function App() {
  return (
    <div className="App">
      <TodoProvider>
     <Todo/>
     <Todolist/>
     </TodoProvider>
    </div>
  );
}

export default App;
