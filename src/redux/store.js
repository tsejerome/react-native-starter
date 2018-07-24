import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { LoggerReducer } from "./reducers/logger-reducer";
import { CounterReducer } from "./reducers/counter-reducer";
import { LoggerSaga } from "./sagas/logger-saga";

const saga = createSagaMiddleware();

export const store = createStore(combineReducers({
	LoggerReducer: LoggerReducer,
	CounterReducer: CounterReducer
}), applyMiddleware(saga));

saga.run(function* () {
	yield all([
		LoggerSaga
	].map(fork));
});
