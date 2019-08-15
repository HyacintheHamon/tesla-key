import { CANCEL } from "redux-saga";

const pfx = 'side_effects/auth/';

/* ========= Actions ========= */

export const SIGN_IN = pfx + 'SIGN_IN';
export const RECEIVED_USER_DATA = pfx + 'RECEIVED_USER_DATA';
export const SIGN_IN_ERROR = pfx + 'SIGN_IN_ERROR';

export const requestSignIn = (authData) => ({
	type: SIGN_IN,authData:authData
})

export const receivedUserData = (userData) => ({
	type: RECEIVED_USER_DATA,userData:userData
})

export const receivedSignInError = (error) => ({
	type: SIGN_IN_ERROR,error:error
})

export default {
    SIGN_IN,
    SIGN_IN_ERROR,
    RECEIVED_USER_DATA,
    requestSignIn,
    receivedUserData,
    receivedSignInError
}