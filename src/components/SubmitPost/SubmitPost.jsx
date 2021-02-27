import React from 'react';

const SubmitPost = ({ postsUpdate, postTextUpdate, currentPostText }) => {

  const newPostText = React.createRef();

  const createPost = () => {
    postsUpdate(newPostText.current.value);
  };

  const changePostText = () => {
    postTextUpdate(newPostText.current.value)
  };

  return (
    <>
      <textarea onChange={changePostText} ref={newPostText}  value={currentPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
