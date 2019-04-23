export const USERS_LOADED = 'USERS_LOADED'
export const SET_USER = 'SET_USER'

export function setUser(user) {
    return {
        type: SET_USER,
        user
    }
}

export function usersLoaded(users) {
    return {
        type: USERS_LOADED,
        users
    }
}