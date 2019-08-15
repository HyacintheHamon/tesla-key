import {
	GET_ERROR,
} from '../../actions';

const initialState = {
	error:""
};

export const error = (state = initialState, action) => {
	switch (action.type) {
		case GET_ERROR:
			return applyGetError(state, action);
		default:
			return state;
	}
};


function applyGetError(state, action) {
	const  {error}  = action;
	return {
		...state,
		error: error
	};
}

export default error;