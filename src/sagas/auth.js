import { take, call, put, race, all } from 'redux-saga/effects';
import { delay, select } from 'redux-saga';
import helper from '../Utils/helper'

import {
    receivedUserData,
    receivedSignInError,
} from '../actions';

import API from '../Utils/api';


export const handleSignIn = function* handleSignIn({authData}) {

    try {
        console.log(authData);
        const userData = yield call(API.getBearerToken, authData);
        if ( userData.result==="failure") {
            throw userData;
        } else{
            yield put(receivedUserData(userData));
        }
    } catch (error) {
        yield put(receivedSignInError(error.message));
    }
}

