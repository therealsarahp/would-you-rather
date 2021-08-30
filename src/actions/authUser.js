export const SET_AUTH_USER= "SET_AUTH_USER";
export const REMOVE_AUTH_USER = "REMOVE_AUTH_USER";

export function setAuthUser (id){
    return {
        type: SET_AUTH_USER, id
    }
}

export function handleSetAuthUser(user){
    return(dispatch) => {
        dispatch(setAuthUser(user))
    }
}

function removeAuthUser (){
    return {
        type: REMOVE_AUTH_USER
    }
}

export function handleRemoveAuthUser (){
    return (dispatch) => {
        dispatch(removeAuthUser())
    }
}

