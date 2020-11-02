import React, { useEffect, useState } from 'react';
import './Post.css';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import {
	getPostFromAPI,
	updatePostInAPI,
	sendVoteToAPI,
	sendCommentToAPI,
	removeCommentFromAPI,
	removePostFromAPI
} from './actions/posts';
import NewPost from './NewPost';
import CommentList from './CommentList';
import PostDisplay from './PostDisplay';
import NewComment from './NewComment';

function Post(props) {
    const [isEditing, setIsEditing] = useState(false);
    const  { postId } = useParams();
    
	const history = useHistory();
	const post = useSelector(state => state.posts[postId]);
	const dispatch = useDispatch();

	useEffect(() => {
		async function getPost() {
			dispatch(getPostFromAPI(postId));
		}
		if (!post) {
			getPost();
		}
	}, [dispatch, postId, post]);

	const toggleEdit = () => {
		isEditing ? setIsEditing(false) : setIsEditing(true);
	};

	function edit({ title, description, body }) {
		dispatch(updatePostInAPI(postId, title, description, body));

		toggleEdit();
	}

	const handleDelete = () => {
		dispatch(removePostFromAPI(postId));
		history.push('/');
	};

	const vote = (direction) => {
		dispatch(sendVoteToAPI(postId, direction));
	};

	function addComment(text) {
		dispatch(sendCommentToAPI(postId, text));
	}

	function deleteComment(commentId) {
		dispatch(removeCommentFromAPI(postId, commentId));
	}

	if (!post)
		return (
			<div className='fa-2x'>
				<i className='fas fa-circle-notch fa-spin mx-2'></i>
				<span>Loading...</span>
			</div>
		);

	return (
		<div className='Post'>
			{isEditing ? (
				<NewPost post={post} save={edit} cancel={toggleEdit} />
			) : (
				<PostDisplay
					post={post}
					toggleEdit={toggleEdit}
					handleDelete={handleDelete}
					doVote={vote}
				/>
			)}

			<section className='Post-comments mb-4'>
				<h4>Comments</h4>
				<CommentList comments={post.comments} deleteComment={deleteComment} />
				<NewComment addComment={addComment} />
			</section>
		</div>
	);
}

export default Post;