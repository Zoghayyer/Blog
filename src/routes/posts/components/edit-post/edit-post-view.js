// Ahmed Zoghayyer
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../../../components/button';
import './edit-post.scss';

const EditPostView = ({id, title, text, handleTitleOnChange, handleSubmit, handleTextOnChange}) => (
  <div id="edit-post" className="ml-3 mr-3">
    <div className="row header">
      <h2>Edit Post {id}</h2>
    </div>
    <div className="mt-5">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="Title"
            onChange={handleTitleOnChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="textarea-description">Text:</label>
          <textarea
            type="text"
            className="form-control"
            id="textarea-description"
            onChange={handleTextOnChange}
            value={text}
          />
        </div>
        <div className="float-right mt-3">
          <Button type="submit" theme="danger">Save</Button>
        </div>
      </form>
    </div>
  </div>
);

EditPostView.propTypes = {
  handleTitleOnChange: PropTypes.func.isRequired,
  handleTextOnChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default EditPostView;