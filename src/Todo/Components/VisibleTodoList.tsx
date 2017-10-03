import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TodoList from './TodoList';
import { Todo, TodosListState } from '../Reducers/constants';
import { todosListReducer } from '../Reducers/reducers';
import * as A from '../Reducers/actions';
interface VisivleTodoListProps {
   todos: Todo[];
   filter: string;
   onToggleTodo: (id: string) => any;
   // fetchTodos: any;
   // isFetching: boolean;
   // errorMessage: string;
   // addTodo: (text: string) => any;
}
class VisibleTodoList extends React.Component<VisivleTodoListProps, {}> {
   public componentWillMount() {
      A.getTodos();

   }
   public componentDidUpdate(prevProps: VisivleTodoListProps, prevState) {
      if (this.props.todos.length !== prevProps.todos.length) {
         A.getTodos();

      }
   }
   public render() {
      return (
         <div >
            <TodoList todos={this.props.todos} onTodoClick={this.props.onToggleTodo} />
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   onToggleTodo(id: string) { dispatch(A.toggleTodo(id)); },
});
const mapSteteToProps = (state: any, ownprops: any) => {
   console.log(ownprops);
   return {
      todos: state.todoApp.todos,
      filter: 'all',
   };
};
export default withRouter(connect(
   mapSteteToProps,
   mapDispatchToProps,
)(VisibleTodoList));
