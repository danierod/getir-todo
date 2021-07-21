import React from 'react';
import './TodoList.scss';
import TodoListItem from './TodoListItem/TodoListItem';
import TodoListSection from './TodoListSection/TodoListSection';

const TodoList = ({ title, children, handleCreateTodo }) => {
  return (
    <div className="todo-list">
      <div className="todo-list__title">{title}</div>
      {children}
      <button
        className="todo-list__create-task"
        type="button"
        onClick={handleCreateTodo}
      >
        Create Todo
      </button>
    </div>
  );
};

TodoList.Section = TodoListSection;
TodoList.Item = TodoListItem;
export default TodoList;
