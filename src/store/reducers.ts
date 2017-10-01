import { todosListReducer } from '../Todo/Reducers/reducers';
import { TodosListState } from '../Todo/Reducers/constants';

export interface ApplicationState {
   todoApp: TodosListState;
}

export const reducers = {
   todoApp: todosListReducer,
};
