import React from 'react';

const TodoListSection = ({ title, children }) => {
  return (
    <div className="todo-list__section">
      <div className="todo-list__section__title">
        <h3>{title}</h3>
      </div>
      <div className="todo-list__section__content">{children}</div>
    </div>
  );
};

export default TodoListSection;
