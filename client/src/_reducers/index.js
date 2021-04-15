//Reducer 가 여러가지(기능)일때 하나로 합쳐줌

import {combineReducers} from 'redux';
import user from './user_reducer';

const rootReducer = combineReducers({
    user
});

export default rootReducer;