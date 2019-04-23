import { getInitialData } from "../utils/api";
import { tweetsLoaded } from "./tweets";
import { usersLoaded, setUser } from "./users";

export const LOAD_DATA = 'LOAD_DATA'

function loadData() {
    return {
        type: LOAD_DATA,
        loaded: true
    }
}

export function handleLoadData() {
    return (dispatch) => {
        return getInitialData()
            .then(({tweets, users}) => {
                dispatch(loadData())
                dispatch(tweetsLoaded(tweets))
                dispatch(usersLoaded(users))
                dispatch(setUser(users['tylermcginnis']))
            })
    }
}