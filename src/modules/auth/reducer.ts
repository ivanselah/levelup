import axios from 'axios';
import { call, put, delay } from 'redux-saga/effects';
import { authFailureAction, authSuccessAction } from './actions';

const login = () => {
  return axios.get('https://jsonplaceholder.typicode.com/todos/1');
};

function* authSaga() {
  yield delay(1000);
  try {
    const { data }: { data: any } = yield call(login);
    yield put({ ...authSuccessAction(), payload: data });
  } catch (e) {
    yield put({ ...authFailureAction(), payload: 'Fetching Error!!' });
  }
}

export default authSaga;
