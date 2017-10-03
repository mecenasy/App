import * as paths from './paths';
import req from './apiProxy';
import { v4 } from 'node-uuid';
import { Todo } from '../Todo/Reducers/constants';
const pathParams = require('path-params');
const p = pathParams.pathParams;

const replaceParam = (toReplace) => (path, replaceWith) => {
   return path.replace(toReplace, replaceWith.toString());
};

const replaceId = replaceParam(':id');

export function addTodo(text: string) {
   return req.post(paths.todosList, {
      completed: false,
      id: v4(),
      text,
   });
}

export function removeTodo(id: string) {
   return req.delete(replaceId(paths.todo, id));
}

export function getTodos() {
   return req.get(paths.todosList);
}

export function toogleTodo(todo: Todo) {
   todo.completed = !todo.completed;
   return req.put(replaceId(paths.todo, todo.id), todo);
}

export function getTodo(id: string) {
   return req.get(replaceId(paths.todo, id));
}

export function getTodosByFilter(filter: string) {
   return req.get(paths.getTodosByFilter(filter));
}
