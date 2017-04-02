import React from 'react';
import {FETCH_SINGLE_POST} from '../actions/index';

const postReducer = function (state=null,action) {
    switch(action.type) {
        case FETCH_SINGLE_POST:
            // return state.concat(action.payload.data);
            return action.payload.data;
            
        default:
            return state;
    }
}

export default postReducer;