import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import PostReducer from './post_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer,
  form: formReducer
});

export default rootReducer;
