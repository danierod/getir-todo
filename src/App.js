import './App.css';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Getir - TODO</p>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
