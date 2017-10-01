import { fork } from 'redux-saga/effects';
import { todosSaga } from '../Todo/Reducers/sagas';

export function* rootSaga() {
   yield fork(todosSaga);
}
