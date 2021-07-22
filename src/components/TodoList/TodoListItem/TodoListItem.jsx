import React, { useState, useRef, useEffect } from 'react';
import classNames from 'classnames';

const TodoListItem = ({ todo, handleSaveTodo, toggleIsCompleted }) => {
  const [isEditing, setIsEditing] = useState(
    !todo.title || todo.title.length === 0,
  );
  const inputRef = useRef();

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const saveTodo = () => {
    const newTitle = inputRef.current.value;
    if (newTitle) {
      handleSaveTodo({ ...todo, title: newTitle });
      setIsEditing(false);
    }
  };

  const renderConditionalActions = () => {
    return isEditing && handleSaveTodo ? (
      <button type="button" onClick={saveTodo}>
        Save
      </button>
    ) : (
      toggleIsCompleted && (
        <button type="button" onClick={toggleIsCompleted.bind(null, todo)}>
          {todo.isCompleted ? 'Mark as to do' : 'Mark completed'}
        </button>
      )
    );
  };

  const handleClickOnTitle = () => {
    if (handleSaveTodo) {
      setIsEditing(true);
    }
  };

  const handleKeyDownOnTitle = (event) => {
    if (event.keyCode === 13 || event.keyCode === 32) {
      setIsEditing(true);
    }
  };

  const handleEditingInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      saveTodo();
    }
  };

  return (
    <div className="todo-list__item" key={todo.id}>
      <div
        className={classNames('todo-list__item__title', {
          completed: todo.isCompleted,
        })}
        aria-label="todo-item-title"
        role="button"
        tabIndex="0"
        onClick={handleClickOnTitle}
        onKeyDown={handleKeyDownOnTitle}
      >
        {isEditing ? (
          <input
            ref={inputRef}
            aria-label="todo-item-edit-input"
            defaultValue={todo.title}
            onKeyDown={handleEditingInputKeyDown}
          />
        ) : (
          todo.title
        )}
      </div>
      <div className="todo-list__item__actions">
        {renderConditionalActions()}
      </div>
    </div>
  );
};

export default TodoListItem;
