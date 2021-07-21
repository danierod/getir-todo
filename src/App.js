import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './components/TodoList/TodoList';
import { fetchTodo, postTodo, putTodo } from './redux/Todo/todo.actions';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todos.items.filter((todo) => !todo.isCompleted),
  );
  const completedTodos = useSelector((state) =>
    state.todos.items.filter((todo) => todo.isCompleted),
  );
  const todayDate = new Date().toDateString();
  const formattedDate = todayDate.substring(0, todayDate.length - 5);

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleCreateTodo = () => {
    const id = Math.floor(Math.random() * 100);
    dispatch(
      postTodo({
        title: `Todo ${id}`,
        id: Math.floor(Math.random() * 100),
        isCompleted: false,
      }),
    );
  };

  const handleUpdateTodo = (todo) => {
    const title = `U-${todo.title}`;
    dispatch(
      putTodo({
        ...todo,
        title,
      }),
    );
  };

  const handleMarkCompleted = (todo) => {
    dispatch(
      putTodo({
        ...todo,
        isCompleted: true,
      }),
    );
  };

  return (
    <div className="App">
      <TodoList
        title={
          <>
            <h1>Todo List</h1>
            <span>{formattedDate}</span>
          </>
        }
        handleCreateTodo={handleCreateTodo}
      >
        <TodoList.Section title="Tasks">
          {todos.map((todo) => (
            <TodoList.Item
              key={todo.id}
              todo={todo}
              handleUpdateTodo={handleUpdateTodo}
              handleMarkCompleted={handleMarkCompleted}
            />
          ))}
        </TodoList.Section>

        <TodoList.Section title="Completed">
          {completedTodos.map((todo) => (
            <TodoList.Item key={todo.id} todo={todo} />
          ))}
        </TodoList.Section>
      </TodoList>
    </div>
  );
}

export default App;
