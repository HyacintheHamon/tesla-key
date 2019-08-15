import { take, call, put, race, all, select } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import {
    receivedVehicleInfo,
    receivedError
} from '../actions';

import API from '../Utils/api';

export const handleGetVehicleInfo = function* handleGetVehicleInfo(vehicleId) {

    try {
        const resultVehicleInfo = yield call(API.getVehicleData, vehicleInfo);
        if (!resultVehicleInfo) {
            throw REQUEST_ERROR;
        } else {
            yield put(receivedVehicleInfo({vehicleInfo: resultVehicleInfo, }));
        }
    } catch (error) {
        yield put(receivedError(error));
    }
}