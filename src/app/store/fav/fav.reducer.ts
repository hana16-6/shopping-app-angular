import { Action, createReducer, on, State } from '@ngrx/store';
import {  AddToFav } from './fav.action';

const favList = {
    currentItem:[]
}
export function AddToFavReducer(state = favList, action) {
  switch (action.type) {
    case 'SET_ITEM':
        // FUNCTIONALITY TO BE DONE BEFORE RETURN
        console.log(state.currentItem);
      return {
        ...state,
        currentItem:[...state.currentItem , action.payload],
      };
      case 'REMOVE_ITEM':
        console.log(action.payload);
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
}