import { combineReducers } from 'redux';

import {
    appLoading,
} from './ui';
import { 
    app,
    auth,
    error,
    vehicle
} from './app';

export default combineReducers({
    app,
    auth,
    error,
    vehicle
});