export const RECEIVE_USERS = "RECEIVE_USERS";

function receiveUsers(users){
   return {
        type: RECEIVE_USERS,
        users,
    }
}