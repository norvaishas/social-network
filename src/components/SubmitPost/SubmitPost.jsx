import React from 'react';

const SubmitPost = ({ postsUpdate }) => {

  const newPostText = React.createRef();

  const createPost = () => {
    postsUpdate(newPostText.current.value);
  }

  return (
    <>
      <textarea ref={newPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
