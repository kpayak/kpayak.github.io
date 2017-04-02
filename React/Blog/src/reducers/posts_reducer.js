import React from 'react';
import {FETCH_POSTS} from '../actions/index';

const postsReducer = function (state=[],action) {
    switch(action.type) {
        case FETCH_POSTS:
            // return state.concat(action.payload.data);
            return action.payload.data;
        default:
            return state;
    }
}

export default postsReducer;