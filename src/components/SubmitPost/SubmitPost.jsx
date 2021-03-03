import React from 'react';

const SubmitPost = ({ addPost, updateTextPost, currentPostText }) => {

  const newPostText = React.createRef();

  const createPost = () => {
    addPost(newPostText.current.value);
  };

  const changePostText = () => {
    updateTextPost(newPostText.current.value)
  };

  return (
    <>
      <textarea onChange={changePostText} ref={newPostText}  value={currentPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
