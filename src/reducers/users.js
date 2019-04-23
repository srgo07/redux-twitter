import { SET_USER } from "../actions/users";
import { USERS_LOADED } from "../actions/users";

export default function reduceUsers(state = [], action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.user.id
            };
        case USERS_LOADED:
            return {
                ...state,
                userList: action.users
            };
    
        default:
            return state;
    }
}