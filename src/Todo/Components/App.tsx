import * as React from 'react';
import VisibleTodoList from './VisibleTodoList';
import AddTodo from './AddTodo';
import ToggleBar from './ToggleBar';
import { Grid, Row, Col } from 'react-bootstrap';
export default class App extends React.Component<{}, {}> {
   public render() {
      return (
         <Grid className={'container'}>
            <Row className={'showGrid'}>
               <AddTodo />
            </Row>
            <Row className={'showGrid'}>
               <ToggleBar/>
            </Row>
            <Row className={'showGrid'}>
               <VisibleTodoList />
            </Row>
            {/* <Footer /> */}
         </Grid>
      );
   }
}
