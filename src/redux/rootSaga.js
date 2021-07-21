import { spawn } from 'redux-saga/effects';
import {
  watchFetchTodosSaga,
  watchPostTodoSaga,
  watchPutTodoSaga,
} from './Todo/todo.saga';

export default function* rootSaga() {
  yield spawn(watchFetchTodosSaga);
  yield spawn(watchPostTodoSaga);
  yield spawn(watchPutTodoSaga);
}
