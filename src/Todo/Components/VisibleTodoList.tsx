import * as React from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { Todo, TodosListState } from '../Reducers/constants';
import { todosListReducer } from '../Reducers/reducers';
import * as A from '../Reducers/actions';
interface VisivleTodoListProps {
   todos: Todo[];
   filter: string;
   // toggleTodo: (id: string) => any;
   // fetchTodos: any;
   // isFetching: boolean;
   // errorMessage: string;
   // addTodo: (text: string) => any;
}
class VisibleTodoList extends React.Component<VisivleTodoListProps, {}> {
   public componentWillMount() {
      A.getTodos();

   }
   public componentDidUpdate(prevProps: VisivleTodoListProps) {
      if (this.props.todos.length !== prevProps.todos.length) {
         A.getTodos();

      }
   }
   public render() {
      return (
         <div >
            <TodoList todos={this.props.todos} />
         </div>
      );
   }
}

const mapSteteToProps = (state, ownprops) => {
   
   return {
      todos: state.todoApp.todos,
      filter: 'all',
   };
};
export default connect(
   mapSteteToProps,
)(VisibleTodoList);
