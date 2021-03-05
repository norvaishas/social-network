import React from 'react';

const SubmitPost = ({ dispatch, currentPostText }) => {

  const newPostText = React.createRef();

  const createPost = () => {
    dispatch({type: 'ADD_POST'});
  };

  const changePostText = () => {
    dispatch({type: 'POST_TEXT_UPDATE', payload: newPostText.current.value})
  };

  return (
    <>
      <textarea onChange={changePostText} ref={newPostText}  value={currentPostText}/>
      <button onClick={createPost}>Add post</button>
    </>
  )
}

export default SubmitPost;
