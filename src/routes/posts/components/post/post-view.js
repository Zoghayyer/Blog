// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './post.scss';

const PostView = ({id, title, text, handleDelete}) => (
  <div id="post" className="mb-3">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{id}</h6>
        <p className="card-text">{text}</p>
        <Link to={`/blogs/${id}`} className="card-link">Edit</Link>
        <span onClick={handleDelete} className="card-link delete-link">Delete</span>
      </div>
    </div>
  </div>
);

PostView.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default PostView;