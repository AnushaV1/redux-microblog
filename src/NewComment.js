import React, {useState} from "react";

const NewComment = ({ addComment }) => {
    const [comment, setComment] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addComment(comment);
        setComment('')
    }

    const handleChange = e => {
        setComment(e.target.value);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
        <div className='form-group'>
        <input type="text"
            name="comment"
            id="comment"
            value={comment}
            placeholder="Add Comment"
            onChange={handleChange} />
        </div>
        <button className='btn btn-primary'>Add</button>
        </form>
        </div>

    )
}

export default NewComment;