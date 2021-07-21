import { createAction } from '@reduxjs/toolkit';

export const TODO_FETCH = 'todos/fetch';
export const TODO_POST = 'todos/post';
export const TODO_PUT = 'todos/put';
export const TODO_SET = 'todos/set';
export const TODO_CREATE = 'todos/create';
export const TODO_UPDATE = 'todos/update';

export const fetchTodo = createAction(TODO_FETCH);
export const postTodo = createAction(TODO_POST);
export const putTodo = createAction(TODO_PUT);

export const setTodos = createAction(TODO_SET);
export const createTodo = createAction(TODO_CREATE);
export const updateTodo = createAction(TODO_UPDATE);
