import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PostForm from "./PostForm";
import { sendPostToAPI } from "./actions/posts";

const NewPost = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const cancel = () => {
        history.push("/")
    }

    const add = ({title, description, body}) => {
        dispatch(sendPostToAPI(title, description, body));
        history.push("/");
    }

    return (
        <div>
        <h1>New Post</h1>
        <PostForm save={add} cancel={cancel} />
        </div>
    )
}

export default NewPost;