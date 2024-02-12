import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import testReducer from './reducer';
import mySaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { test: testReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(mySaga);

export default store;
