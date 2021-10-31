import { Action} from '@ngrx/store';


export class AddToFav implements Action {
  public type = 'SET_ITEM';
  constructor(public payload: any) {
    console.log('FIRE FROM ACTION', payload);
  }
}

export class RemoveFav implements Action {
  readonly type = 'REMOVE_ITEM';
  constructor(public payload: any) {
    console.log('FIRE FROM remove ACTION', payload);
  }
}

