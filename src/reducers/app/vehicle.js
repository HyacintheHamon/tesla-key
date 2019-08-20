import {
	RECEIVED_VEHICLE_INFO
} from '../../actions';

const initialState = {
	vehicleInfo: {
		lockState: 2
	}
};

export const vehicle = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVED_VEHICLE_INFO:
			return applyReceivedVehicleInfo(state, action);
		
		default:
			return state;
	}
};


function applyReceivedVehicleInfo(state, action) {
	const  { vehicleInfo }  = action;
	return {
		...state,
		vehicleInfo,
	};
}
