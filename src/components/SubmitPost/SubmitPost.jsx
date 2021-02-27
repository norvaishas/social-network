import React from 'react';

const SubmitPost = () => {

  const newPostText = React.createRef();

  const createPost = () => {
    console.log(newPostText.current.value);
  }

  return (
    <>
      <textarea ref={newPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
