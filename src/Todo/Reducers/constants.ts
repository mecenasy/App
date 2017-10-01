export interface Todo {
   id: string;
   text: string;
   completed: boolean;
}

export type TodosListState = Todo [] ;

export const singleTodoInitialState = { id: '', text: '', completed: false } as Todo;

export const todosListInitialState = []  as TodosListState;

export enum ActionType {
   GetTodos = 'todosApp/GET_TODOS',
   GetTodosFail = 'todosApp/GET_TODOS_FAIL',
   AddTodo = 'todosApp/ADD_TODO',
   AddTodoSuccess = 'todosApp/ADD_TODO_SUCCESS',
   AddTodoFail = 'todosApp/ADD_TODO_FAIL',
   DelTodo = 'todosApp/DEL_TODO',
   DelTodoSuccess = 'todosApp/DEL_TODO_SUCCESS',
   DelTodoFail = 'todosApp/DEL_TODO_FAIL',
}

export interface TodosAction {
   type: ActionType;
   id?: string;
   text?: string;
   completed?: boolean;
}
