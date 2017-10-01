import * as React from 'react';
import { connect } from 'react-redux';
import * as A from '../Reducers/actions';
import { ApplicationState } from '../../store/reducers';
interface AddTodoProps {
   todos;
   onAddTodo;
}
class AddTodo extends React.Component<AddTodoProps, {todoText: string}> {
   constructor(props: AddTodoProps) {
      super(props);
      // TODO: bo to nie jest za ładne IMO
      this.state = { todoText: '' };
   }

   private handleChange = (e) => {
      this.setState({ todoText: e.target.value });
   }

   private handleSubmit = (e) => {
      e.preventDefault();
      this.props.onAddTodo(this.state.todoText);
      this.setState({ todoText: '' });
   }

   public render() {

      return (
         <div>
         <form onSubmit={this.handleSubmit}>Podaj todosa
            <input type="text" autoFocus={true} value={this.state.todoText} onChange={this.handleChange} placeholder={'text'} />
            <input type="submit" formMethod="POST" value={'Dodaj'} disabled={this.state.todoText === ''} />
         </form>
      </div>

      );
   }
}
const mapDispatchToProps = (dispatch) => ({
   onAddTodo(name: string) { dispatch(A.addTodo(name)); },
});

const mapStateToProps = (state: ApplicationState) => {
   return {
      todos: state.todoApp,
   }

}
export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(AddTodo);
