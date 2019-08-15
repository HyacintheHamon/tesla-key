import { takeEvery, takeLatest, all } from 'redux-saga/effects';

import {
    REQUEST_VEHICLE_INFO,
    SIGN_IN
} from '../actions';

import {
    handleGetVehicleInfo,
} from './vehicle';
import {
    handleSignIn,
} from './auth';

export default function* root() {
    yield all([
        takeLatest(SIGN_IN, handleSignIn),
        takeLatest(REQUEST_VEHICLE_INFO, handleGetVehicleInfo),
    ]);

}
