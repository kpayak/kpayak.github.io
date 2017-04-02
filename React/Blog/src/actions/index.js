import Axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const ADD_POST = 'ADD_POST';
export const FETCH_SINGLE_POST = 'FETCH_SINGLE_POST';
export const DELETE_POST = 'DELETE_POST';

const url = "http://reduxblog.herokuapp.com/api/posts?key=kp0286";

export function fetchPosts() {
    const request = Axios.get(url);
    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function addPost(props) {
    const request = Axios.post(url,props);
    return {
        type: ADD_POST,
        payload: request
    }
}

export function fetchSinglePost(id) {
    const fetchurl = "http://reduxblog.herokuapp.com/api/posts/"+id+"?key=kp0286";
    const request = Axios.get(fetchurl);
    return {
        type: FETCH_SINGLE_POST,
        payload: request
    }
}

export function deletePost(id) {
    const deleteurl = "http://reduxblog.herokuapp.com/api/posts/"+id+"?key=kp0286";
    const request = Axios.delete(deleteurl);
    return {
        type: DELETE_POST,
        payload: request
    }
}