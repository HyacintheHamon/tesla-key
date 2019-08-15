import { CANCEL } from "redux-saga";

const pfx = 'side_effects/error/';

/* ========= Actions ========= */


export const GET_ERROR = pfx + 'GET_ERROR';

export const receivedError = (error) => ({
	type: GET_ERROR,error:error
})

export default {

	GET_ERROR,
	receivedError
}