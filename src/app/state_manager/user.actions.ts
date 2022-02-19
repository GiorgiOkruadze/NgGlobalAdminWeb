import { Action } from "@ngrx/store";
import { UserActionTypes } from "./user-action-types.enum";

export interface BaseAction extends Action {
    type: any;
    payload:any;
}

export class UserAdd implements BaseAction{
    type:UserActionTypes = UserActionTypes.Add;
    constructor(public payload:any){}
}

export class UserRemove implements BaseAction{
    type:UserActionTypes = UserActionTypes.Remove;
    constructor(public payload:any){}
}