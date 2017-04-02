import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

export default (
    <Route path='https://kpayak.github.io/React/Blog/index.html' component={App}>
        <IndexRoute component={PostsIndex}/>
        <Route path='https://kpayak.github.io/React/Blog/index.html/posts/new' component={PostsNew}/>
        <Route path='https://kpayak.github.io/React/Blog/index.html/posts/:id' component={PostsShow}/>
    </Route>
);
