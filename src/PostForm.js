import React, {useState} from "react";


const PostForm = ({post, save, cancel}) => {
  const [formData, setFormData] = useState({
    title: post.title,
    description: post.description,
    body: post.body,
  })

  const handleChange = e => {
    const {name, value} = e.target;
    setFormData((data) => ({
      ...data,
      [name]:value
    }))
  }

const handleSubmit = e => {
  e.preventDefault();
  save(formData);
}

return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" name="title" id="title" placeholder="Title" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
            <input type="text" className="form-control" name="description" id="description" placeholder="description" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="body">Body</label>
            <input type="text" className="form-control" name="body" id="body" placeholder="Body" onChange={handleChange} />
            </div>
            <button className="btn btn-primary mr-2">Save</button>
      <button onClick={cancel} className="btn btn-secondary">
        Cancel
      </button>
        </form>
    )
}   
PostForm.defaultProps = {
  post: { title: "", description: "", body: "" },
};

export default PostForm;