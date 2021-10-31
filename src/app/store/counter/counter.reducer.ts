import { Action, createReducer, on, State } from '@ngrx/store';
import { Counter } from './counter.action';


export function CounterReducer(state = 0, action) {
  switch (action.type) {
    case 'SET_COUNTER':
      return action.payload
    default:
      return state;
  }
}