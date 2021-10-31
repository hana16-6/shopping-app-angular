import { Action} from '@ngrx/store';

export class Counter implements Action {
  public type = 'SET_COUNTER';
  constructor(public payload: any) {
    console.log('FIRE FROM ACTION', payload);
  }
}