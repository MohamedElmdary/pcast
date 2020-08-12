import { combineReducers, createStore } from 'redux';
import { PcastState, PcastActions, PcastReducer } from './pcast';

export interface AppState {
  pcast: PcastState;
}

export interface AppActions {
  pcast: PcastActions;
}

const store = createStore(
  combineReducers({
    pcast: PcastReducer,
  }),
);

export default store;
