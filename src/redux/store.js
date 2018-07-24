import { combineReducers, createStore } from 'redux';
import { CounterReducer } from "./reducers/counter-reducer";

export const store = createStore(combineReducers({
	CounterReducer: CounterReducer
}));
