import { createBrowserHistory } from 'history';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import configureStore from './store/configure';
import { getTodos } from './Todo/Reducers/actions';
import AddTodo from './Todo/Components/AddTodo';

const history = createBrowserHistory();
const initialState = window.__INITIAL_STATE__ || {};
const store = configureStore(history, initialState);
console.log(store.getState());
const renderApp = () => {
   // This code starts up the React app when it runs in a browser. It sets up the routing configuration
   // and injects the app into a DOM element.
   ReactDOM.render(
      <AppContainer>
         <Provider store={store}>
            <ConnectedRouter history={history}>
               <Switch>
                  <Route exact={true} path="/" component={AddTodo} />
               </Switch>
            </ConnectedRouter>
         </Provider>
      </AppContainer>,
      document.getElementById('app'),
   );
};

store.dispatch(getTodos());
renderApp();

if (module.hot) {
   module.hot.accept('./Todo/Components/AddTodo', () => {
      const component = require<typeof AddTodo>('./Todo/Components/AddTodo');
      renderApp();
   });
}
