import { LogInUser } from "../models/logInUser.model";
import { UserActionTypes } from "./user-action-types.enum";
import { BaseAction } from "./user.actions";

export class UserReducer {
    static userState: LogInUser = null as any;

    public static Reducer(state = UserReducer.userState, action: BaseAction) {
        switch (action.type) {
            case UserActionTypes.Add:
                UserReducer.userState = action.payload as LogInUser;
                return UserReducer.userState;
            case UserActionTypes.Remove:
                UserReducer.userState = null as any;
                return UserReducer.userState;
            default:
                return state;
        }
    }
}
