import { takeEvery, call, put } from 'redux-saga/effects';
import { TEST_ACTION } from './actions';

async function apiFunc() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}

function* getUsersFetch() {
  const users = yield call(apiFunc);
  yield put({ type: 'test/testReducer1', payload: users });
}

export default function* mySaga() {
  yield takeEvery(TEST_ACTION, getUsersFetch);
}
