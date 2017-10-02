import * as React from 'react';
import { connect } from 'react-redux';
import * as A from '../Reducers/actions';
import { ApplicationState } from '../../store/reducers';
import { FormControl, FormGroup, Button, ControlLabel } from 'react-bootstrap';
interface AddTodoProps {
   todos;
   onAddTodo;
}
class AddTodo extends React.Component<AddTodoProps, { todoText: string }> {
   constructor(props: AddTodoProps) {
      super(props);
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
   private getValidationState = () => {
      const lenght = this.state.todoText.length;
      if (lenght > 10) {
         return 'success';
      } else if (lenght > 5) {
         return 'warning';
      } else {
         return 'error';
      }
   }

   public render() {
      return (
         <div className={'col-lg-4 col-xs-12 col-sm-8 col-md-6 '}>
            <form onSubmit={this.handleSubmit} className={'form-inline'} >
               <FormGroup validationState={this.getValidationState()}  >
                  <ControlLabel>Lista Todos`ów</ControlLabel>
                  <FormControl type="text" value={this.state.todoText} placeholder={'text'} autoFocus={true} onChange={this.handleChange} />
                  <FormControl type="submit" value={'Dodaj'} disabled={this.state.todoText.length === 5} />
               </FormGroup>
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
