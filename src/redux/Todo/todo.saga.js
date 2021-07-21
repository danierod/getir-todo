import { put, takeEvery } from 'redux-saga/effects';
import {
  createTodo,
  setTodos,
  TODO_FETCH,
  TODO_POST,
  TODO_PUT,
  updateTodo,
} from './todo.actions';

function* fetchTodos() {
  console.log('fetching todos ');
  const response = yield fetch('/todos', {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  });
  const todos = yield response.json();
  console.log('Get todos: ', todos);
  yield put(setTodos(todos));
}

export function* watchFetchTodosSaga() {
  yield takeEvery(TODO_FETCH, fetchTodos);
}

function* postTodo({ payload }) {
  console.log('posting todo: ', payload);
  const response = yield fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const todo = yield response.json();
  yield put(createTodo(todo));
}

export function* watchPostTodoSaga() {
  yield takeEvery(TODO_POST, postTodo);
}

function* putTodo({ payload }) {
  console.log('putting todo: ', payload);
  const response = yield fetch('/todos', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const todo = yield response.json();

  yield put(updateTodo(todo));
}

export function* watchPutTodoSaga() {
  yield takeEvery(TODO_PUT, putTodo);
}
