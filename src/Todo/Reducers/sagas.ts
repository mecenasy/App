import { take, put, call, fork, takeLatest } from 'redux-saga/effects';
import * as C from './constants';
import * as A from './actions';
import api from '../../api';

export function* todosSaga() {
   yield [
      fork(addTodo),
      fork(getTodos),
      fork(delTodo),
      fork(toggleTodo),
   ];
}

function* toggleTodo() {
   while (true) {
      const action = yield take(C.ActionType.ToggleTodo);
      const id = action.id;
      try {
         const request = yield call(api.getTodo, id);
         const data = request.data;
         yield call(api.toogleTodo, data);
         yield put(A.toggleTodoSuccess(data.id, data.text, data.completed));
      } catch (err) {
         yield put(A.toggleTodoFail(action.id));
      }
   }
}

function* addTodo() {
   while (true) {
      const action = yield take(C.ActionType.AddTodo);
      const text = action.text;
      try {
         const request = yield call(api.addTodo, text);
         const data = request.data;
         yield put(A.addTodoSuccess(data.id, data.text, data.completed));
      } catch (err) {
         yield put(A.addTodoFail());
      }
   }
}

function* getTodos() {
   const action = yield take(C.ActionType.GetTodos);
   try {
      const request = yield call(api.getTodos);
      const data = request.data;
      for (const todo of data) {
         yield put(A.addTodoSuccess(todo.id, todo.text, todo.completed));
      }
   } catch (err) {
      yield put(A.getTodosFail());
   }
}

function* delTodo() {
   const action = yield take(C.ActionType.DelTodo);
   const id = action.id;
   try {
      const request = yield call(api.removeTodo, id);
      const data = request.data;
      yield put(A.delTodoSuccess(data.id));
   } catch (err) {
      yield put(A.delTodoFail(id));
   }
}
