import React from 'react';
import classNames from 'classnames';

const TodoListItem = ({ todo, handleUpdateTodo, handleMarkCompleted }) => {
  return (
    <div className="todo-list__item" key={todo.id}>
      <div
        className={classNames('todo-list__item__title', {
          completed: todo.isCompleted,
        })}
      >
        {todo.title}
      </div>
      <div className="todo-list__item__actions">
        {handleUpdateTodo && (
          <button type="button" onClick={handleUpdateTodo.bind(null, todo)}>
            Update Todo
          </button>
        )}
        {handleMarkCompleted && (
          <button type="button" onClick={handleMarkCompleted.bind(null, todo)}>
            Mark completed
          </button>
        )}
      </div>
    </div>
  );
};

export default TodoListItem;
