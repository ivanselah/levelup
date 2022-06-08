import { AUTH_SUCCESS } from './auth/actions';
import { all, takeLatest } from 'redux-saga/effects';
import authSaga from './auth/reducer';

function* watchAuthSaga() {
  yield takeLatest(AUTH_SUCCESS, authSaga);
}

function* rootReducer() {
  yield all([watchAuthSaga()]);
}

export default rootReducer;
