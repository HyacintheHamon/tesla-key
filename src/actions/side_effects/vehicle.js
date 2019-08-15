import { CANCEL } from "redux-saga";

const pfx = 'side_effects/vehicle/';

/* ========= Actions ========= */


export const REQUEST_VEHICLE_INFO = pfx + 'REQUEST_VEHICLE_INFO';
export const RECEIVED_VEHICLE_INFO = pfx + 'RECEIVED_VEHICLE_INFO';

export const requestVehicleInfo = (vehicleInfo) => ({
	type: REQUEST_VEHICLE_INFO, vehicleInfo: vehicleInfo
})

export const receivedVehicleInfo = (vehicleInfo) => ({
	type: RECEIVED_VEHICLE_INFO, vehicleInfo: vehicleInfo
})

export default {
	REQUEST_VEHICLE_INFO,
	RECEIVED_VEHICLE_INFO,
	requestVehicleInfo,
	receivedVehicleInfo,
}