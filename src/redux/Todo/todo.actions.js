import { createAction } from '@reduxjs/toolkit';

export const CREATE = 'todos/create';
export const UPDATE = 'todos/update';

export const createTodo = createAction(CREATE);

export const updateTodo = createAction(UPDATE);
