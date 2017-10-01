import * as C from './constants';

export const todosListReducer = (state = C.todosListInitialState, action: C.TodosAction): C.TodosListState => {
   const { type, id, completed } = action;
   switch (type) {
      case C.ActionType.AddTodoSuccess:
         return [...state, singleTodoReducer(undefined, action)];
      case C.ActionType.AddTodo:
      case C.ActionType.AddTodoFail:
      case C.ActionType.DelTodo:
      case C.ActionType.DelTodoFail:
      case C.ActionType.GetTodos:
      case C.ActionType.GetTodosFail:
         return state;
      case C.ActionType.DelTodoSuccess:
         return state.filter(item => item.id !== id);
      default:
         return state;
   }
};

export const singleTodoReducer = (state = C.singleTodoInitialState, action: C.TodosAction): C.Todo => {
   const { type, id, text, completed } = action;
   switch (type) {
      case C.ActionType.AddTodo:
         return {
            id,
            text,
            completed,
         };
      default:
         return state;
   }
};
