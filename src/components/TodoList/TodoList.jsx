import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchTodo, postTodo, putTodo } from '../../redux/Todo/todo.actions';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) =>
    state.todos.items.filter((todo) => !todo.isCompleted),
  );
  const completedTodos = useSelector((state) =>
    state.todos.items.filter((todo) => todo.isCompleted),
  );

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
    <>
      <div>Todo List</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.title}</div>
          <button type="button" onClick={handleUpdateTodo.bind(null, todo)}>
            Update Todo
          </button>
          <button type="button" onClick={handleMarkCompleted.bind(null, todo)}>
            Mark completed
          </button>
        </div>
      ))}
      <div>Completed</div>
      {completedTodos.map((todo) => (
        <div key={todo.id}>
          <div>{todo.title}</div>
        </div>
      ))}
      <button type="button" onClick={handleCreateTodo}>
        Create Todo
      </button>
    </>
  );
};

export default TodoList;
