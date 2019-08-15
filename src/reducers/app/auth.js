import {
	SIGN_IN_ERROR,
	RECEIVED_USER_DATA,
} from '../../actions';

const initialState = {
	accessToken: '',
	token: '',
	userData:[],
	error:"",
	loactions: []
};

export const auth = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVED_USER_DATA:
			return applyReceivedUserData(state, action);
		case SIGN_IN_ERROR:
			return applySignInError(state, action);
		default:
			return state;
	}
};


function applyReceivedUserData(state, action) {
	const  {userData}  = action;
	return {
		...state,
        userData: userData
	};
}

function applySignInError(state, action) {
	const  {error}  = action;
	return {
		...state,
		error: error
	};

}

export default auth;