import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoList from './components/TodoList/TodoList';
import { fetchTodo, postTodo, putTodo } from './redux/Todo/todo.actions';
import './App.scss';

function App() {
  const dispatch = useDispatch();
  const [newTodoItem, setNewTodoItem] = useState();
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
    setNewTodoItem({});
  };

  const handleSaveTodo = (todo) => {
    dispatch(postTodo(todo));
    setNewTodoItem(undefined);
  };

  const handleUpdateTodo = (todo) => {
    dispatch(putTodo(todo));
  };

  const toggleIsCompleted = (todo) => {
    dispatch(
      putTodo({
        ...todo,
        isCompleted: !todo.isCompleted,
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
          {newTodoItem && (
            <TodoList.Item
              key="new-todo"
              todo={newTodoItem}
              handleSaveTodo={handleSaveTodo}
              toggleIsCompleted={toggleIsCompleted}
            />
          )}
          {todos.map((todo) => (
            <TodoList.Item
              key={todo.id}
              todo={todo}
              handleSaveTodo={handleUpdateTodo}
              toggleIsCompleted={toggleIsCompleted}
            />
          ))}
        </TodoList.Section>

        <TodoList.Section title="Completed">
          {completedTodos.map((todo) => (
            <TodoList.Item
              key={todo.id}
              todo={todo}
              toggleIsCompleted={toggleIsCompleted}
            />
          ))}
        </TodoList.Section>
      </TodoList>
    </div>
  );
}

export default App;
