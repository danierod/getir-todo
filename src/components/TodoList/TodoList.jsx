import React from 'react';

import { connect } from 'react-redux';
import { createTodo, updateTodo } from '../../redux/Todo/todo.actions';

const TodoList = ({ todos, dispatchCreateTodo, dispatchUpdateTodo }) => {
  const handleCreateTodo = () => {
    const id = Math.floor(Math.random() * 100);
    dispatchCreateTodo({
      id,
      title: `Todo ${id}`,
    });
  };

  const handleUpdateTodo = (todo) => {
    const title = `U-${todo.title}`;
    dispatchUpdateTodo({
      ...todo,
      title,
    });
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
        </div>
      ))}
      <button type="button" onClick={handleCreateTodo}>
        Create Todo
      </button>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchCreateTodo: (todo) => dispatch(createTodo(todo)),
    dispatchUpdateTodo: (todo) => dispatch(updateTodo(todo)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
