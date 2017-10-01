import * as C from './constants';

export const getTodos = (): C.TodosAction => ({
   type: C.ActionType.GetTodos,
});

export const getTodosFail = (): C.TodosAction => ({
   type: C.ActionType.GetTodosFail,
});

// incrementing and decrementing
export const addTodo = (text: string): C.TodosAction => ({
   type: C.ActionType.AddTodo,
   text,
});

export const addTodoSuccess = (id: string, text: string , completed: boolean): C.TodosAction => ({
   type: C.ActionType.AddTodoSuccess,
   id,
   text,
   completed,
});

export const addTodoFail = (): C.TodosAction => ({
   type: C.ActionType.AddTodoFail,
});

export const delTodo = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodo,
   id,
});

export const delTodoSuccess = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodoSuccess,
   id,
});

export const delTodoFail = (id: string): C.TodosAction => ({
   type: C.ActionType.DelTodoFail,
   id,
});
